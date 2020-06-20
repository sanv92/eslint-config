module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', './configs/index'],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    document: false,
  },
}
