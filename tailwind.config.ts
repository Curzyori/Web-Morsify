import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5645D4", // Notion Purple
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f6f5f4", // Warm off-white
          foreground: "#1a1a1a", // Deep ink
        },
        accent: {
          DEFAULT: "#5645D4",
        },
        muted: {
          DEFAULT: "#f6f5f4",
          foreground: "#5d5b54", // Slate
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1a1a1a",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
