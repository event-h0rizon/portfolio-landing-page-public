/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        DancingScript: ["Dancing Script", "cursive"],
        Oxygen: ["Oxygen", "cursive"],
        Roboto: ["Roboto", "cursive"],


       },
    },
  },
  plugins: [],
}
