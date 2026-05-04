// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./app/globals.css"
//   ],
//   theme: {
//     extend: {
//       colors: {
//         gold: "#D4AF37",
//         dark: "#0A0A0A",
//         light: "#F5F5F5",
//       },
//       fontFamily: {
//         yekan: ["IRANYekan", "sans-serif"],
//       },
//       boxShadow: {
//         gold: "0 0 15px rgba(212, 175, 55, 0.5)",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1a1a1a",
      },
    },
  },
  plugins: [],
}