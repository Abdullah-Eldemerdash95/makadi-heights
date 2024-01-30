/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)'},
          '50%': { transform: 'rotate(10deg)'},
        },
        wiggle1: {
          '0%, 50%': { alignItems:"start", opacity: 0},
          '100%': { alignItems:"center", opacity:1},
        },
        fadeLeft: {
          '0%': {  transform: "translateX(-24vw)"},
          '100%': {  transform: "translateX(0vw)"},
        },
        fadeRight: {
          '0%': {  transform: "translateX(124vw)"},
          '100%': {  transform: "translateX(0vw)"},
        },
        fadeIn: {
          '0%': { opacity: 0},
          '100%': {  opacity: 1},
        },
        wiggle2: {
          '0%': { transform: 'rotate(-3deg)'},
          '20%': { transform: 'rotate(3deg)'},
          '40%': { transform: 'rotate(-3deg)'},
          '60%': { transform: 'rotate(3deg)'},
          '80%': { transform: 'rotate(-3deg)'},
          '100%': { transform: 'rotate(3deg)'},
        },
    },
  },
  plugins: [],
}
}