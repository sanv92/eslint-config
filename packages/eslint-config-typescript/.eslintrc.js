module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['import', '@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@sanv/eslint-config-base',
    './configs/index',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
}
