module.exports = {
  parser: 'babel-eslint',
  plugins: ['import', 'unicorn', 'prettier'],
  extends: [
    'airbnb-base',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    './configs/index',
  ],
};
