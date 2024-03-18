import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ea6224",
      },
      screens: {
        sm: "576px",
        lg: "992px",
      },
      container: {
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1200px",
        },
      },
      keyframes: {
        leftToRight: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        rightToLeft: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        bottomToTop: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
      },
      animation: {
        leftToRight: "leftToRight 0.6s",
        rightToLeft: "rightToLeft 0.6s",
        bottomToTop: "bottomToTop 0.6s",
      },
    },
  },
  plugins: [],
};
export default config;
