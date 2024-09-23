import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Jacquarda_Bastarda': ['"Jacquarda Bastarda 9"', "sans-serif"],
        'Pixelify' : ['"Pixelify Sans"', "sans-serif"],
        'IBM_Plex' : ['"IBM Plex Sans"', "sans-serif"],
      },
      "colors": {
        'grey-06': '#0f0f0f',
        'grey-10': '#1a1a1a',
        'grey-12': '#1f1f1f',
        'grey-15': '#262626',
        'grey-20': '#333333',
        'grey-25': '#404040',
        'grey-30': '#4d4d4d',
        'grey-40': '#666666',
   },
    },
  },
  plugins: [],
};
export default config;
