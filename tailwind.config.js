/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'archivo-black': ['"Archivo Black"', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2.5rem', {
          lineHeight: 'normal',
          fontWeight: 400,
        }],
        'h2': ['2rem', {
          lineHeight: 'normal',
          fontWeight: 400,
        }],
        'h3': ['1.5rem'],
      },
    },
    colors: {
      'background': '#2B2B31',
      'cardBg': '#C4C4C4',
      'cardHeader': '#222222',
      'cardBody': '#333333',
      'borderBg': 'rgba(255, 255, 255, 0.25)',
      'btnBg': 'rgba(255, 255, 255, 0.05)',
    },
  },
  plugins: [],
}