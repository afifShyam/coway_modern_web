import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // `xs:` is used by 7 labels in Navbar/ProductCard; without this screen the
      // variant is never generated and those labels stay permanently hidden.
      screens: {
        xs: '420px',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
      colors: {
        slate: {
          750: '#293548',
          850: '#111726',
          900: '#0B0F19',
          950: '#070A11',
        },
      }
    },
  },
  plugins: [],
};
export default config;
