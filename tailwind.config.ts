import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        praimary: "#C32929",
        gray: {
          "300": "#EEEEEE",
          "400": "#767676",
          "500": "#E4E4E4",
          "900": "#222222",
        },
        red: {"100": "#F5E6E0"},
      },
    },
    fontSize: {
      xs: ["14px", {lineHeight: "1.4rem"}],
      sm: ["15px", {lineHeight: "1.8rem"}],
      md: ["16px", {lineHeight: "1.8rem"}],
      base: ["18px", {lineHeight: "1.2rem"}],
      lg: ["20px", {lineHeight: "1.2rem"}],
      xl: ["22px", {lineHeight: "1.2rem"}],
      "2xl": ["24px", {lineHeight: "1.2rem"}],
      "3xl": ["25px", {lineHeight: "1.2rem"}],
      "4xl": ["26px", {lineHeight: "1.2rem"}],
      "5xl": ["30px", {lineHeight: "1.2rem"}],
      "6xl": ["35px", {lineHeight: "1.2rem"}],
      "7xl": ["40px", {lineHeight: "1.2rem"}],
      "8xl": ["13px", {lineHeight: "1.8rem"}],
    },
    fontFamily: {
      SofiaPro: ["Sofia Pro", ...fontFamily.sans],
    },
    backgroundImage: {
      100: "url('/images/bg-header (1).jpg')",
      200: "url('/images/bg-mobile.png')",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.925rem",
      },
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1700px",
    },
  },
  plugins: [],
};
export default config;
