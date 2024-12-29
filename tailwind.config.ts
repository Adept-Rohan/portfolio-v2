import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
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
        customGray: 'rgb(189 189 189 / <alpha-value>)',
        lightText: '#1E293B', // A slate gray for light theme
        darkText: '#FFFFFF', // White text for dark theme
        // Darker green for light mode text
        headingBlack: '#000000', // Pure black for headings
        subheadingGray: '#6b7280', // Neutral gray for subheadings

      },
    },
  },
  plugins: [],
} satisfies Config;
