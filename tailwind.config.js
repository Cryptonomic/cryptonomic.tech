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
      screens: {
        '3xl': '2000px',
      },
    },
    colors: {
      'background': '#2B2B31',
      'cardBg': '#E6E6E6',
      'cardHeader': '#222222',
      'cardBody': '#333333',
      'borderBg': 'rgba(255, 255, 255, 0.25)',
      'btnBg': 'rgba(255, 255, 255, 0.05)',
      'footerBg': 'rgba(255, 255, 255, 0.02)',
      'link': '#649DFF',
    },
  },
  plugins: [],
}