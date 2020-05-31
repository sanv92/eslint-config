module.exports = {
  extends: [
    './rules/imports',
    './rules/unicorn',
    './rules/best-practices',
    './rules/es6',
    './rules/imports',
    './rules/prettier',
    './rules/strict',
    './rules/style',
    './rules/unicorn',
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
};
