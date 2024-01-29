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
				'tg-white': 'var(--tg-theme-bg-color)',
				'tg-black': 'var(--tg-theme-text-color)',
				'tg-hint': 'var(--tg-theme-hint-color)',
				'tg-link': 'var(--tg-theme-link-color)',
				'tg-primary': 'var(--tg-theme-button-color)',
				'tg-primary-text': 'var(--tg-theme-button-text-color)',
				'tg-secondary-white': 'var(--tg-theme-secondary-bg-color)',
				'tg-header-bg': 'var(--tg-theme-header-bg-color)', // Новое свойство
				'tg-accent-text': 'var(--tg-theme-accent-text-color)', // Новое свойство
				'tg-section-bg': 'var(--tg-theme-section-bg-color)', // Новое свойство
				'tg-section-header-text': 'var(--tg-theme-section-header-text-color)', // Новое свойство
				'tg-subtitle-text': 'var(--tg-theme-subtitle-text-color)', // Новое свойство
				'tg-destructive-text': 'var(--tg-theme-destructive-text-color)', // Новое свойство
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ['light', 'dark'],
		logs: true,
	},
};
