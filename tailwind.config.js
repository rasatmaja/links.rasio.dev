const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      'serif': [...defaultTheme.fontFamily.serif],
      'mono': [...defaultTheme.fontFamily.mono]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
