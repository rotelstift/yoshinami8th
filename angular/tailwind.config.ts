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
        'sm': "12px",
        'md': "20px",
        'lg': "32px"
      }
    },
  },
  plugins: [],
}

export default config
