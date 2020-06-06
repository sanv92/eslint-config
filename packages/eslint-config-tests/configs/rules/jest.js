module.exports = {
  plugins: ['jest'],
  rules: {
    // Have control over test and it usages (consistent-test-it)
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/consistent-test-it.md
    'jest/consistent-test-it': [
      'error',
      { fn: 'test', withinDescribe: 'test' },
    ],

    // Require top-level describe block (require-top-level-describe)
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-top-level-describe.md
    'jest/require-top-level-describe': 'error',

    // describe/test titles should be valid (valid-title)
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-title.md
    'jest/valid-title': 'warn',

    // Suggest to have all hooks at top-level before tests (prefer-hooks-on-top)
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-hooks-on-top.md
    'jest/prefer-hooks-on-top': 'error',

    // Disallow explicitly returning from tests (no-test-return-statement)
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-return-statement.md
    'jest/no-test-return-statement': 'warn',
  },
}
