module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    '@sanv/eslint-config-base',
    'plugin:@typescript-eslint/recommended',
    './configs/index',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
}
