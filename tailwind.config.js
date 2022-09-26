module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "Helvetica", "Arial", "sans-serif"],
        raleway: ["raleway", "Helvetica", "Arial", "sans-serif"],
        poppins: ["poppins", "Helvetica", "Arial", "sans-serif"],
      },
      spacing: {},
      colors: {},
    },
  },
  plugins: [],
}
