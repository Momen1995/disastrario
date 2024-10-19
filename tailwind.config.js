/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#09090B",
        secondary: "#71717A",
        btnColor: "#F1F1F1",
      },
      backgroundColor: {
        btnPrimary: "#F26922",
      },
      fontFamily: {
        "onset-font": ["Onest", "sans-serif"],
      },
    },
  },
  plugins: [],
};
