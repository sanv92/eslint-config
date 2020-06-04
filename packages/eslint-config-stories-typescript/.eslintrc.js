module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
  extends: [
    '@sanv/eslint-config-base',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    './configs/index',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
}
