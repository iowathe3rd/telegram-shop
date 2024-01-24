import type { Config } from 'tailwindcss'
import {fontFamily} from "tailwindcss/defaultTheme"
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', ...fontFamily.sans],
        mono: ['var(--font-roboto-mono)', ...fontFamily.mono],
      },
      colors: {
        'tg-white': 'var(--telegram-bg-color)',
        'tg-black': 'var(--telegram-text-color)',
        'tg-hint': 'var(--telegram-hint-color)',
        'tg-link': 'var(--telegram-link-color)',
        'tg-primary': 'var(--telegram-button-color)',
        'tg-primary-text': 'var(--telegram-button-text-color)',
        'tg-secondary-white': 'var(--telegram-secondary-bg-color)',
      },
    },
  },
  plugins: [],
} satisfies Config

