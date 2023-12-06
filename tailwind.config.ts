import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#040e1a",
        text: "#D8CEE8",
        primary: "#25b617",
        secondary: "#d8cee8",
        accent: "#FFA500",
      },
      boxShadow: {
        '3xl': '0 10px 90px 5px rgba(0, 0, 0, 0.3)',
      },
      textShadow: {
        'lg': '2px 2px 8px rgba(255, 255, 255, 0.5)',
      }
  
    },
  },
  plugins: [],
};
export default config;
