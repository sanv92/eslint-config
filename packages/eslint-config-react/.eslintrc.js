module.exports = {
  plugins: ['react', 'jsx-a11y'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    '@sanv/eslint-config-base',
    '@sanv/eslint-config-import',
    './configs/index',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
}
