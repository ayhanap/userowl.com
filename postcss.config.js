module.exports = {
  plugins: {
    'postcss-lab-function': {
      preserve: false,
      subFeatures: {
        displayP3: false
      }
    },
    tailwindcss: {},
    'postcss-focus-visible': {
      replaceWith: '[data-focus-visible-added]',
    },

    autoprefixer: {},

  },
}
