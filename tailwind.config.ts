import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f4f5fc',
        foreground: "var(--foreground)",
        sidebarText: '#889cb2',
      },
      fontFamily : {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        amatic : ['Amatic SC', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
