const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
		...createGlobPatternsForDependencies(__dirname),
	],
	theme: {
		extend: {
			// Fonts are being loaded on `src/pages/_document.tsx`, so if you want to
			// change the font, you need to change the url there and name here.
			colors: {
				'telegram-white': 'var(--tg-theme-bg-color)',
				'telegram-black': 'var(--tg-theme-text-color)',
				'telegram-hint': 'var(--tg-theme-hint-color)',
				'telegram-link': 'var(--tg-theme-link-color)',
				'telegram-primary': 'var(--tg-theme-button-color)',
				'telegram-primary-text': 'var(--tg-theme-button-text-color)',
				'telegram-secondary-white': 'var(--tg-theme-secondary-bg-color)',
				'telegram-header-bg': 'var(--tg-theme-header-bg-color)', // Новое свойство
				'telegram-accent-text': 'var(--tg-theme-accent-text-color)', // Новое свойство
				'telegram-section-bg': 'var(--tg-theme-section-bg-color)', // Новое свойство
				'telegram-section-header-text': 'var(--tg-theme-section-header-text-color)', // Новое свойство
				'telegram-subtitle-text': 'var(--tg-theme-subtitle-text-color)', // Новое свойство
				'telegram-destructive-text': 'var(--tg-theme-destructive-text-color)', // Новое свойство
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				dark: {
					...require('daisyui/src/theming/themes')['dark'],
					'base-100': 'var(--tg-theme-bg-color)',
					'base-200': 'var(--tg-theme-secondary-bg-color',
					'text-hint': 'var(--tg-theme-hint-color)',
					primary: 'var(--tg-theme-button-color)',
				},
			},
		],
	},
};
