/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#f4ece8",
        primaryDark: "#d4c6c0",
        primaryLight: "#faf6f4",
        secondary: "#dde8e8",
        secondaryDark: "#b8c7c7",
        secondaryLight: "#f0f5f5",
        accent1: "#e5d6d0",
        accent2: "#ccdada",
        button: "#fe4955",
        yellowButton: "#ffd500",
        text: {
          primary: "#8a7b75",
          secondary: "#5f6e6e",
          light: "#b3a49d",
        },
      },
      fontFamily: {
        lufga: ["Lufga", "sans-serif"],
      },
      fontSize: {
        "4xl": "2.5rem",
        "5xl": "3.5rem",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.05)",
        hover: "0 8px 30px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
