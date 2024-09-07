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
      "colors": {
        'absolute-white': '#ffffff',
        'absolute-black': '#000000',
        'white-shades-50': '#808080',
        'white-shades-55': '#8c8c8c',
        'white-shades-60': '#999999',
        'white-shades-65': '#a6a6a6',
        'white-shades-70': '#b3b3b3',
        'white-shades-75': '#bfbfbf',
        'white-shades-80': '#cccccc',
        'white-shades-90': '#e6e6e6',
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
