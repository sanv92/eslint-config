module.exports = {
  plugins: ['react', 'jsx-a11y', 'jest'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    '@sanv/eslint-config-base',
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
