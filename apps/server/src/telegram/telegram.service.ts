import { Injectable } from '@nestjs/common';
import { Message, SendMessageOptions } from 'node-telegram-bot-api';
import TelegramBot from 'node-telegram-bot-api';
import * as process from 'process';
import { catalogInlineKeyboard, catalog, start, help } from './templates';

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
if (!TELEGRAM_TOKEN) {
	throw new Error('tg token is empty');
}

@Injectable()
export class TelegramService {
	private readonly bot: TelegramBot;
	constructor() {
		this.bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

		this.bot.on('message', this.onReceive.bind(this)); // Привязываем контекст this
	}

	private onReceive = async (msg: Message): Promise<void> => {
		// Используем стрелочную функцию, чтобы сохранить контекст this
		console.log(msg);

		if (msg.text) {
			const { command, languageCode } = this.getCommandAndLanguage(
				msg.text.trim().toLowerCase(),
				msg.from.language_code
			);

			switch (command) {
				case '/start':
					await this.sendMessage(msg.chat.id, start[languageCode]);
					break;
				case '/catalog':
					await this.sendCatalog(msg.chat.id, languageCode);
					break;
				case '/help':
					await this.sendMessage(msg.chat.id, help[languageCode], {
						parse_mode: 'Markdown',
					});
					break;
				default:
					await this.sendMessage(msg.chat.id, start[languageCode]);
					break;
			}
		}
	};
	private getCommandAndLanguage(
		text: string,
		languageCode: string
	): { command: string; languageCode: string } {
		const commands = ['/start', '/catalog', '/help'];
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
