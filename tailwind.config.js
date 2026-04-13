/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(75, 255, 134, 0.12), 0 20px 60px rgba(13, 30, 15, 0.3)'
      },
      colors: {
        omni: {
          950: '#06120d',
          900: '#0b1f14',
          800: '#112a1d',
          700: '#18422c',
          600: '#1d6c3f',
          500: '#27d255',
          400: '#5afc8f',
          300: '#9cffb9',
          200: '#c8ffdc'
        }
      },
      backgroundImage: {
        'omni-hero': 'radial-gradient(circle at top, rgba(54, 255, 131, 0.22), transparent 26%), radial-gradient(circle at 8% 15%, rgba(181, 255, 125, 0.18), transparent 17%), linear-gradient(180deg, #06120d 0%, #091b12 48%, #0d281d 100%)'
      }
    }
  },
  plugins: []
};
