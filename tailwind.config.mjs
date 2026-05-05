/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink:   '#C8009C',
          yellow: '#FFCA28',
          green:  '#00BF63',
          orange: '#FF7A00',
        },
      },
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
        body:    ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
