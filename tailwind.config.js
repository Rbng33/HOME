/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    fontFamily: {
      'concert': ['Concert One', 'sans-serif'],
      'inter': [ 'Inter, sans-serif'],
    },
    textShadow: {
      'custom': ['5.67855px 2.83927px 2.27142px rgba(0, 0, 0, 0.25)'],
    },
    screens: {
      'xxs' : '362px',
      'xs' : '576px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'bo': '1120px',
      'xl': '1280px',
      '2xl': '1536px',   
    },
    extend: {},
  },
  plugins: []
}

