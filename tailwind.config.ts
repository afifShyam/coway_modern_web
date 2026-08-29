import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        slate: {
          850: '#111726',
          900: '#0B0F19',
          950: '#070A11',
        },
        coway: {
          primary: '#0284C7',
          accent: '#38BDF8',
          surface: '#111827',
          card: '#161F33',
          border: '#1F293D'
        }
      }
    },
  },
  plugins: [],
};
export default config;
