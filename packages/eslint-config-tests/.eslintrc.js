module.exports = {
  plugins: ['react', 'jsx-a11y', 'jest'],
  extends: [
    '@sanv/eslint-config-base',
    'airbnb',
    'airbnb/hooks',
    './configs/index',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  env: {
    'jest/globals': true,
  },
}
