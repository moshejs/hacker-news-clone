import { Open_Sans } from "next/font/google";
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
        'black-half': 'rgba(0, 0, 0, 0.5)'
      },
      fontFamily: {
        ubuntu: ['Ubuntu Mono', 'monospace'], // Ensure Ubuntu Mono is loaded in your index.html or via import in your CSS
        opensans: ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
