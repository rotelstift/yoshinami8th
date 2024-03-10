/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss"
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
      }
    },
  },
  plugins: [],
}

export default config
