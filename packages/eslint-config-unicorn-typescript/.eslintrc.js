module.exports = {
  parser: 'babel-eslint',
  plugins: ['unicorn'],
  extends: [
    'plugin:unicorn/recommended',
    '@sanv/eslint-config-unicorn',
    './configs/index',
  ],
}
