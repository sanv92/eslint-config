module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'jsx-a11y', '@typescript-eslint', 'jest'],
  extends: [
    '@sanv/eslint-config-base',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    './configs/index',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  env: {
    'jest/globals': true,
  },
}
