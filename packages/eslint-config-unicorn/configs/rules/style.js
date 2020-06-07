module.exports = {
  rules: {
    // require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props.html
    'quote-props': 'off',

    // specify whether double or single quotes should be used
    // https://eslint.org/docs/rules/quotes
    'quotes': 'off',

    // require or disallow use of semicolons instead of ASI
    // https://eslint.org/docs/rules/semi-style
    'semi': 'off',

    // require identifiers to match the provided regular expression
    // https://eslint.org/docs/rules/id-match
    'id-match': [
      'error',
      '^(([A-Za-z0-9]+){2,})|([A-Z][A-Z_0-9]+)|($)$',
      {
        properties: false,
        onlyDeclarations: true,
      },
    ],

    // disallow use of unary operators, ++ and --
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',
  },
}
