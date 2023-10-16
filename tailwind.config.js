/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      abg: "hsl(var(--app-bg) / <alpha-value>)",
      cbg: "hsl(var(--content-bg) / <alpha-value>)",
      accent: "hsl(var(--accent) / <alpha-value>)",
      title: "hsl(var(--title) / <alpha-value>)",
      desc: "hsl(var(--desc) / <alpha-value>)",
    },
  },
  plugins: [],
};
