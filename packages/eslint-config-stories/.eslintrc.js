module.exports = {
  plugins: ['react', 'jsx-a11y'],
  extends: [
    '@sanv/eslint-config-base',
    'airbnb',
    'airbnb/hooks',
    './configs/index',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
}
