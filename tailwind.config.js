/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        AquaSenseBlue: '#2194F3',
        AquaSenseGrey: '#666666',
        AquaSenseTextGrey: '#263238',
        AquaSenseTextDarkGrey: '#4D4D4D',
        AquaSenseLightBlue: '#D4EEFF',
        AquaSenseLightGreen: '#E0F0EF',
        AquaSenseBlack: '#242424',
        AquaSenseNeutralGrey: '#717171',
        AquaSensePackage: '#253D4E',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
