/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'xs':'330px',
        'sm':'420px',
        'md':'735px',
        'md-lg': '850px', // Custom breakpoint
      },
    },
  },
  plugins: [],
}

