module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    '@sanv/eslint-config-base',
    '@sanv/eslint-config-react',
    './configs/index',
  ],
}
