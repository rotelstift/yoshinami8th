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
        'icon-pixiv': "url('assets/snsicons/pixiv-logo-icon-r.png')",
        'icon-x': "url('assets/snsicons/x-logo-black.png')"
      }
    },
  },
  plugins: [],
}

export default config
