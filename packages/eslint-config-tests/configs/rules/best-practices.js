module.exports = {
  rules: {
    // disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': 'off',

    // Enforce that class methods utilize this
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'componentDidCatch',
          'componentDidMount',
          'componentDidUpdate',
          'componentWillMount',
          'componentWillReceiveProps',
          'componentWillUnmount',
          'componentWillUpdate',
          'render',
          'shouldComponentUpdate',
        ],
      },
    ],
  },
}
