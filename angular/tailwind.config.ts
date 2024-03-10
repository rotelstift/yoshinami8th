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
        'icon-close': "url('assets/ionicons/close.svg')"
      }
    },
  },
  plugins: [],
}

export default config
