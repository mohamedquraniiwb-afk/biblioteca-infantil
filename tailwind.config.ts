import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        night: "#151233",
        night2: "#1E1A4A",
        cream: "#FFF8ED",
        gold: "#FFC93C",
        bubblegum: "#FF5DA2",
        mint: "#3ED9A3",
        grape: "#8B5FBF",
      },
      fontFamily: {
        display: ["var(--font-baloo)", "sans-serif"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
      keyframes: {
        confetti: {
          "0%": { transform: "translateY(-10vh) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(110vh) rotate(360deg)", opacity: "0.9" },
        },
        popIn: {
          "0%": { transform: "scale(0.85)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        confetti: "confetti linear forwards",
        popIn: "popIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
