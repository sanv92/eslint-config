module.exports = {
  parser: 'babel-eslint',
  plugins: ['import', 'unicorn', 'prettier'],
  extends: [
    'airbnb-base',
    'plugin:unicorn/recommended',
    './configs/index',
    'plugin:prettier/recommended',
  ],
}
