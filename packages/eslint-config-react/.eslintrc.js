module.exports = {
  plugins: ['react', 'jsx-a11y'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    '@sanv/eslint-config-base',
    './configs/index',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
}
