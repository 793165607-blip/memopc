import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#27313f",
        fg: "#2C2C2E",
        muted: "#6b6b70",
        mood: {
          joy: "#f4cf6a", calm: "#7fb4f0", low: "#aab2c0",
          irr: "#f3a39c", tangle: "#8fd0f7", tired: "#b9a6ee",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Songti SC", "serif"],
      },
      maxWidth: { content: "1000px" },
    },
  },
  plugins: [],
};
export default config;
