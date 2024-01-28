import { MessageTemplate } from './index';

const catalog: MessageTemplate = {
	en: `
Here is our product catalog. You can view the full catalog by clicking the button below.
`,
	ru: `
Вот наш каталог товаров. Вы можете просмотреть полный каталог, нажав на кнопку ниже.
`,
	kz: `
Бұл біздің тауарлардың каталогы. Сіз толық каталогты төменгі түймешікті басып көре аласыз.
`,
};

const catalogInlineKeyboard = {
	en: {
		inline_keyboard: [[{ text: 'Open Web App', url: 'https://your-web-app-url.com' }]],
	},
	ru: {
		inline_keyboard: [
			[{ text: 'Открыть веб-приложение', url: 'https://your-web-app-url.com' }],
		],
	},
	kz: {
		inline_keyboard: [[{ text: 'Веб-қосымшаны ашу', url: 'https://your-web-app-url.com' }]],
	},
};

export { catalog, catalogInlineKeyboard };
