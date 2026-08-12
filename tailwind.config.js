/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F6F1E7',
        card: '#EFE7D4',
        ink: '#2B2440',
        body: '#4A4456',
        sage: '#7C8B6F',
        sagedark: '#5F6C53',
        brass: '#BE9A55',
        brassdark: '#A17F3F',
        rose: '#E3B7B0',
        line: '#D9CFB4',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}