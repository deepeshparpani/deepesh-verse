/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spider-dark': '#0f0c29',   // Deep Purple/Black background
        'spider-red': '#ff0055',    // Glitch Red/Pink
        'spider-blue': '#00f3ff',   // Glitch Cyan/Blue
        'spider-yellow': '#ffe81f', // Miles Morales Spray Paint Yellow
      },
      fontFamily: {
        'comic': ['"Bangers"', 'cursive'], 
        'mono': ['"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'comic-dots': "radial-g,radient(circle, #333 1px, transparent 1px)",
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  

  plugins: [],
}