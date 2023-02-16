/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '400px',
        sm: '640px',
        md: '768px',
        'md+': '790px',
        'lg-': '984px',
        lg: '1024px',
        xl: '1280px',
        'xl+': '1400px',
        '2xl': '1536px',
      },
      fontFamily: {
        sans: ['Poppins'],
        metaverse: ['Eudoxus Sans'],
      },
      boxShadow: {
        lightShadow: '0 0 3px 2px rgba(0,0,0,0.1)',
        blackShadow: '0 0 3px 2px rgb(150,150,150)',
        darkShadow: '0 0 3px 2px rgb(30,30,30)',
      },
      colors: {
        transparentWhite: 'rgba(255,255,255,0.55)',
        softGray: 'rgb(30,30,30)',
        lightGray: 'rgb(100,100,100)',
        semiDark: 'rgb(15,15,15)',
        mostDark: 'rgb(10,10,10)',
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
}
