module.exports = {
  plugins: ['react', 'jsx-a11y', 'jest'],
  extends: [
    'plugin:jest/recommended',
    'plugin:jest/style',
    '@sanv/eslint-config-react',
    './configs/index',
  ],
  env: {
    'jest/globals': true,
  },
}
