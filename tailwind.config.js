/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  fontSize: {
    base: "1rem",
    s: "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    lg: "1.25rem",
    xl: "1.5rem",
    "2xl": "2rem",
    "3xl": "2.5rem",
    "4xl": "3rem",
    "5xl": "3.5rem",
  },
  screens: {
    xs: "420px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  fontFamily: {
    serif: ["var(--font-core_sans)"],
    sans: ["var(--font-causten)"],
  },
  extend: {
    colors: {
      "button-primary-enabled": "#8A33FD",
      "button-primary-focused-hover": "#6620C1",
      "button-primary-disabled": "#EAEAEA",
      "gray-1": "#807D7E",
      "gray-2": "#BEBCBD",
      "gray-3": "#EDEEF2",
      light: "#F6F6F6",
      secondary: "#8A33FD",
      primary: "#3C4242",
    },
  },
};
export const plugins = [];
