import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['var(--font-quicksand)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        customGreen: 'rgb(65 255 201 / <alpha-value>)',
        customGray: 'rgb(189 189 189 / <alpha-value>)'
      },
    },
  },
  plugins: [],
} satisfies Config;
