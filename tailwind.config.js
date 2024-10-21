/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "eventPlanner-colors": {
          primary: "#5F7470",
          secondary: "#D2D4C8",
          accent: "#B8BDB5",
          background: "#889696",
          detail: "#E0E2DB",
        },
      },
    },
  },
  plugins: [],
};
