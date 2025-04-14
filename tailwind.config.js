/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          wiggle: "wiggle 0.3s ease-in-out",
          up: "up 0.5s ease-in-out",
        },
        keyframes: {
          wiggle: {
            "0%, 100%": { transform: "translateX(0)" },
            "25%": { transform: "translateX(-5px)" },
            "50%": { transform: "translateX(5px)" },
            "75%": { transform: "translateX(-5px)" },
          },
          up: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-20px)" },
          },
        },
      },
    },
    plugins: [],
  };
  