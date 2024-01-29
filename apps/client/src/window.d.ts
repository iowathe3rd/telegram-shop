import { WebApp } from './types/telegram';

declare global {
	interface Window {
		Telegram: {
			WebApp: WebApp;
		};
		basket_modal: HTMLDialogElement;
	}
}
