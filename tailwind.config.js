/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    gap: true,
    border: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      "2xl": [
        "24px",
        {
          lineHeight: "34px",
          fontWeight: "400",
          letterSpacing: "0.5px",
        },
      ],
      "3xl": [
        "32px",
        {
          lineHeight: "38px",
          fontWeight: "500",
          letterSpacing: "1.8px",
        },
      ],
      "4xl": [
        "36px",
        {
          lineHeight: "42px",
          fontWeight: "600",
          letterSpacing: "2.2px",
        },
      ],
      "5xl": [
        "44px",
        {
          lineHeight: "45.3px",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
      "6xl": [
        "64px",
        {
          lineHeight: "65.3px",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
        inter: ["var(--font-inter)"],
        rubik: ["var(--font-rubik)"],
      },
      colors: {
        specialBlue: "#6ea9d7",
        mint: "#A1FFE0",
        lineNumbers: "#8283AD",
        gradient: {
          dark: "#a688ff",
          light: "#d1a8ff",
        },
        gray: {
          100: "#E9E9EB",
          200: "#D4D3D8",
          300: "#A9A8B0",
          400: "#93929C",
          500: "#525162",
          600: "#2F2E49",
          700: "#272639",
          800: "#787879",
        },
        purple: {
          100: "#F3F2F7",
          200: "#DAD9E6",
          300: "#C1C0D6",
          400: "#2A2944",
          500: "#292B45",
          600: "#222539",
          700: "#1E2030",
          800: "#181A28",
          900: "#101018",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@headlessui/tailwindcss")],
}
