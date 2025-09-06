import type { Config } from "tailwindcss";
import {heroui} from "@heroui/theme";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.25vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.925rem + 0.375vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.5rem)',
        'fluid-xl': 'clamp(1.25rem, 1.125rem + 0.625vw, 2rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.25rem + 1.25vw, 3rem)',
        'fluid-3xl': 'clamp(2rem, 1.5rem + 2.5vw, 4rem)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#002147', //previous color: #002147
        nav:'#193759',
        secondary: '#005F69', //previous color: #4682B4
        accent: '#ADD8E6',
        contact: '#193759',  
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        custom1:[
          '"Arvo"',
          '"serif"',
        ],
        custom2:[
          '"Roboto"',
          '"Open Sans"',
          '"Montserrat"',
          '"Oswald"',
          '"sans-serif"',
        ],
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
} satisfies Config;
