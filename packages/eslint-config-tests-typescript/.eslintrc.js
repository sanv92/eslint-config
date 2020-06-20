module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'jsx-a11y', 'jest', '@typescript-eslint'],
  extends: [
    'plugin:jest/recommended',
    'plugin:jest/style',
    '@sanv/eslint-config-react-typescript',
    './configs/index',
  ],
  env: {
    'jest/globals': true,
  },
}
