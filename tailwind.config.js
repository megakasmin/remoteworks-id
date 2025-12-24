/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "12px",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.06)",
        soft: "0 2px 8px rgba(0,0,0,0.04)",
      },
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          soft: "#eff6ff",
        },
      },
    },
  },
  plugins: [],
};
