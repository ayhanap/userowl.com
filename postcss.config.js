module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-focus-visible': {
      replaceWith: '[data-focus-visible-added]',
    },
    'postcss-lab-function': {
      preserve: true,
      subFeatures: {
        displayP3: false
      }
    },
    autoprefixer: {},
  },
}
