/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroimg: "./heroimg.jpg",
      },
      colors: {
        primary: "#EE4266",
      },
    },
  },
  plugins: [],
};
