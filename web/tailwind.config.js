/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "menu-open": {
          from: {             
            opacity: 0,
            transform: 'translateY(-20px)' 
          },
          to: {             
            opacity: 1,
            transform: 'translateY(0)' 
          }
        },

        "menu-close": {
          from: {             
            opacity: 1,
            transform: 'translateY(0)' 
          },
          to: {             
            opacity: 0,
            transform: 'translateY(-20px)'
          }
        }
      },
      animation: {
        "menu-open": "menu-open 1s ease-out",
        "menu-close": "menu-close 1s ease-out",
      }
    },
  },
  plugins: [],
}

