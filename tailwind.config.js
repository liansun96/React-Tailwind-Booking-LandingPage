/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        primary: "#5143d9",
        secondary: {
          100: "#edecfb",
          200: "#bbbcc1",
          300: "#85868a",
          400: "#f5f5f6",
          500: "#aab3be"
        },
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        DmSans: ["DM sans", "sans-serif"],
      },      
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // }
};
