/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite",
        spin: "spin 2s linear infinite"
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0"
          },
          to: {
            backgroundPosition: "-200% 0"
          }
        },
        spin: {
          from: {
            transform: "rotate(0deg)"
          },
          to: {
            transform: "rotate(360deg)"
          }
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}