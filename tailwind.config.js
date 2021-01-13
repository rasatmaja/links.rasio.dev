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
    extend: {
      colors: {
        'primary-light': '#F5F5F5',
        'secondry-light': '#DDDDDD',
        'primary-dark': '#121212',
        'secondry-dark': '#2B2B2B',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
