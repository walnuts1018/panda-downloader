import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Noto: ["Noto Sans JP", "cursive"],
    },
  },
  plugins: [],
}
export default config
