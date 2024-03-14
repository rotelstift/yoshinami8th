/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss"
import { zinc } from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/**/*.{html, ts}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'icon-menu': "url('assets/ionicons/menu.svg')",
        'icon-close': "url('assets/ionicons/close.svg')",
        'icon-person': "url('assets/ionicons/person.svg')",
        'icon-home': "url('assets/ionicons/home.svg')",
        'icon-color-palette': "url('assets/ionicons/color-palette.svg')",
      },
      colors: {
        'base': zinc[300],
        'assort': zinc[600],
        'accent': zinc[800]
      },
      spacing: {
        'xs': '0.5rem', // 8px
        'sm': '1rem', // 16px
        'md': '1.5rem', // 24px
        'lg': '2rem', // 32px
        'xl': '4rem', // 64px
        '2xl': '6rem', // 96px
      }
    },
  },
  plugins: [],
}

export default config
