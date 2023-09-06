module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-focus-visible': {
      replaceWith: '[data-focus-visible-added]',
    },

    autoprefixer: {},
    'postcss-lab-function': {
      preserve: false,
      subFeatures: {
        displayP3: false,
      },
    },
  },
}
