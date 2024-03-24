/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FCFCFD",
        textHeading: "#606265",
        thing: "#8b949c",
        middle: "#EE4C70",
        dark: "#1f2937",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
