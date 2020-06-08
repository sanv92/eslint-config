module.exports = {
  extends: [
    './rules/best-practices',
    './rules/es6',
    './rules/prettier',
    './rules/strict',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // require or disallow trailing commas (comma-dangle)
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': 0,
  },
}
