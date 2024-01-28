import { Injectable } from '@nestjs/common';
import { Message, SendMessageOptions } from 'node-telegram-bot-api';
import TelegramBot from 'node-telegram-bot-api';
import * as process from 'process';
import { catalogInlineKeyboard, catalog, start, help } from './templates';
import { prisma } from '../db';

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
if (!TELEGRAM_TOKEN) {
	throw new Error('tg token is empty');
}

@Injectable()
export class TelegramService {
	private readonly bot: TelegramBot;

	constructor() {
		this.bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });
		this.bot
			.setMyCommands([
				{ command: 'start', description: 'Start using the bot' },
				{ command: 'catalog', description: 'Show product catalog' },
				{ command: 'help', description: 'Show available commands' },
			])
			.then(() => console.log('tg bot commands set'));
		this.bot.on('message', this.onReceive.bind(this));
	}

	private async onReceive(msg: Message): Promise<void> {
		const text = msg.text.trim().toLowerCase();
		if (text.startsWith('admin::auth::login=')) {
			await this.handleAdminLogin(msg);
			return;
		}
		if (msg.text) {
			const { command, languageCode } = this.getCommandAndLanguage(
				msg.text.trim().toLowerCase(),
				msg.from.language_code
			);
			switch (command) {
				case '/start':
					{
						const checkAdmin = await prisma.authDevice.findUnique({
							where: {
								telegramId: String(msg.from.id),
							},
						});
						if (checkAdmin) {
							this.sendMessage(msg.chat.id, 'Welcome back.');
						}
					}
					break;
				case '/catalog':
					await this.sendCatalog(msg.chat.id, languageCode);
					break;
				case '/help':
					await this.sendMessage(msg.chat.id, help[languageCode], {
						parse_mode: 'Markdown',
					});
					break;
				case 'admin::auth::login':
					await this.handleAdminLogin(msg);
					break;
				default:
					await this.sendMessage(msg.chat.id, start[languageCode]);
					break;
			}
		}
	}

	private async handleAdminLogin(msg: Message): Promise<void> {
		const parts = msg.text.split('=');
		if (parts.length !== 2) {
			await this.sendMessage(msg.chat.id, 'Invalid command format');
			return;
		}
		const key = parts[1].trim();
		if (key !== process.env.MASTER_AUTH_TOKEN) {
			await this.sendMessage(msg.chat.id, 'Invalid authentication key');
			return;
		}
		await prisma.authDevice.create({
			data: {
				telegramId: String(msg.from.id),
				metadata: JSON.stringify(msg.from),
			},
		});
		await this.sendMessage(msg.chat.id, 'You have been authenticated as an admin');
	}

	private getCommandAndLanguage(
		text: string,
		languageCode: string
	): { command: string; languageCode: string } {
		const commands = ['/start', '/catalog', '/help', 'admin::auth::login'];
		const command = commands.includes(text) ? text : 'unknown';
		const langCode = languageCode || 'en';
		return { command, languageCode: langCode };
	}

	private async sendCatalog(chatId: number, languageCode: string): Promise<void> {
		const keyboard = catalogInlineKeyboard[languageCode];
		await this.sendMessage(chatId, catalog[languageCode], { reply_markup: keyboard });
	}

	private async sendMessage(
		chatId: number,
		message: string,
		options?: SendMessageOptions
	): Promise<void> {
		await this.bot.sendMessage(chatId, message, options);
	}
}
