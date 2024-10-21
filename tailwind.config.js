/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 1s ease-in-out',
      },
       fontFamily:{
       Inter:[ "Inter", "sans-serif"]
       
      },
    },
  },
  plugins: [],
}

