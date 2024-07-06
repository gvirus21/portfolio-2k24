import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#F8F4EC",
          secondary: "#000",
        },
        dark: {
          primary: "#FF6000",
        },
      },
      screens: {
        xs: "500px",
        "3xl": "2000px",
      },
      fontFamily: {
        quattrocento: "var(--font-quattrocento)",
        hauora: "var(--font-hauora)",
        sendflowers: "var(--font-send-flowers)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      lineHeight: {
        "12": "2.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
