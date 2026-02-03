/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        motivora: {
          "primary": "#6366f1",
          "secondary": "#22c55e",
          "accent": "#f59e0b",
          "neutral": "#1f2933",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
          "info": "#0ea5e9",
          "success": "#16a34a",
          "warning": "#facc15",
          "error": "#dc2626",
          "special": "#ff5724",
        },
      },
      "dark",
    ],
  },
};

export default config;
