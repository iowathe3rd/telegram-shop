import { Injectable, Logger } from '@nestjs/common';
import { Message } from 'node-telegram-bot-api';
import TelegramBot from 'node-telegram-bot-api';

const TELEGRAM_TOKEN = '6710095143:AAEBoEjWeYurGJ-0t_zUbO7i-A3rEfW0C6M';
@Injectable()
export class TelegramService {
	private readonly bot: TelegramBot;
	private logger = new Logger(TelegramService.name);

	constructor() {
		this.bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

		this.bot.on('message', this.onReceive);
	}

	private onReceive(msg: Message): void {
		console.log(msg);
	}
}
