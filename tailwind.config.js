/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsla(0, 0%, 100%, 1)",
        black: "hsla(230, 35%, 7%, 1)",
        "light-cyan": "hsla(231, 77%, 90%, 1)",
      },
    },
  },
  plugins: [],
};
