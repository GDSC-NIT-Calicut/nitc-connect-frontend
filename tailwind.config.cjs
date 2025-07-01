// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This is important to scan all files using Tailwind
  ],
  theme: {
    extend: {
      colors: {
        // optional custom colors
      },
      backgroundImage: {
        'primary': 'linear-gradient(to right, #1a4040, #003333)',
        'login-bg': "url('/src/assets/Login-bg.jpg')",
      },
    },
  },
  plugins: [],
};


