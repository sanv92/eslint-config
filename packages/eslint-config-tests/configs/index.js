module.exports = {
  extends: [
    './rules/react',
    './rules/best-practices',
    './rules/react-hooks',
    './rules/jest',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
