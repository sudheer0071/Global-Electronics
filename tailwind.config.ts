import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        'custom': '8.4% 103px 62px 61px',
      },
      margin: {
        '30': '120px',
      },
      colors: {
        'custom-blue': '#348ad4',
      },
      spacing: {
        '50p': '50%',
        '2px': '2px',
      },
      transitionDuration: {
        '300': '300ms',
      },
      screens:{
        'custom-lg': '1430px', // Custom breakpoint for 1230px
      }
    },
  },
  plugins: [],
};
export default config;
