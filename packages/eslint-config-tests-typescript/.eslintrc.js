module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'react', 'jsx-a11y', '@typescript-eslint'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    '@sanv/eslint-config-base',
    './configs/index',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  env: {
    'jest/globals': true,
  },
}
