module.exports = {
  rules: {
    // disallow declaration of variables that are not used in the code
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      'warn',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        ignoreRestSiblings: false,
        caughtErrors: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
};
