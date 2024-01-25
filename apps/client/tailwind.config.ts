import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--tg-theme-roboto)', ...fontFamily.sans],
        mono: ['var(--tg-theme-roboto-mono)', ...fontFamily.mono],
      },
      colors: {
        'tg-white': 'var(--tg-theme-bg-color)',
        'tg-black': 'var(--tg-theme-text-color)',
        'tg-hint': 'var(--tg-theme-hint-color)',
        'tg-link': 'var(--tg-theme-link-color)',
        'tg-primary': 'var(--tg-theme-button-color)',
        'tg-primary-text': 'var(--tg-theme-button-text-color)',
        'tg-secondary-white': 'var(--tg-theme-secondary-bg-color)',
        'tg-header-bg': 'var(--tg-theme-header-bg-color)', // New in Bot API 7.0+
        'tg-accent-text': 'var(--tg-theme-accent-text-color)', // New in Bot API 7.0+
        'tg-section-bg': 'var(--tg-theme-section-bg-color)', // New in Bot API 7.0+
        'tg-section-header-text': 'var(--tg-theme-section-header-text-color)', // New in Bot API 7.0+
        'tg-subtitle-text': 'var(--tg-theme-subtitle-text-color)', // New in Bot API 7.0+
        'tg-destructive-text': 'var(--tg-theme-destructive-text-color)', // New in Bot API 7.0+
      },
    },
  },
  plugins: [],
} satisfies Config

