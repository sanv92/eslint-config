module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: ['airbnb-base', './configs/index', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    document: false,
  },
}
