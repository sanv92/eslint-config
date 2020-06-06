module.exports = {
  plugins: ['react', 'jsx-a11y', 'jest'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    '@sanv/eslint-config-base',
    './configs/index',
    'prettier/react',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  env: {
    'jest/globals': true,
  },
}
