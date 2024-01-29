import { useEffect, useState } from 'react';
import { WebApp } from '../types/telegram';

export function useTelegram() {
	const [telegram, setTelegram] = useState<WebApp | null>(null);

	useEffect(() => {
		// Проверяем, существует ли window.Telegram и window.Telegram.WebApp и он соответствует типу WebApp
		if (window.Telegram && typeof window.Telegram.WebApp === 'object') {
			const webApp: WebApp = window.Telegram.WebApp;
			// Проверяем, что объект соответствует интерфейсу WebApp
			if ('initData' in webApp && 'themeParams' in webApp) {
				// Если соответствует, устанавливаем его значение в состояние
				setTelegram(webApp);
			}
		}
	}, []);

	return telegram;
}
