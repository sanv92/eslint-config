const extensions = require('../../constants/extensions')

module.exports = {
  plugins: ['unicorn'],
  settings: {
    'import/extensions': extensions.ts,
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: extensions.ts,
      },
    },
    'import/core-modules': [],
    'import/ignore': ['\\.(coffee|scss|css|less|hbs|svg|json)$'],
  },
  rules: {
    'unicorn/better-regex': 'warn',
    'unicorn/catch-error-name': [
      'error',
      { name: 'error', caughtErrorsIgnorePattern: '^_' },
    ],
    'unicorn/consistent-function-scoping': 'warn',
    'unicorn/custom-error-definition': 'off',
    'unicorn/error-message': 'warn',
    'unicorn/escape-case': 'warn',
    'unicorn/expiring-todo-comments': 'off',
    'unicorn/explicit-length-check': 'warn',
    'unicorn/filename-case': ['error', { case: 'kebabCase' }],
    'unicorn/import-index': 'off',
    'unicorn/new-for-builtins': 'warn',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-array-instanceof': 'warn',
    'unicorn/no-console-spaces': 'warn',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/no-for-loop': 'warn',
    'unicorn/no-hex-escape': 'warn',
    'unicorn/no-keyword-prefix': 'off',
    'no-nested-ternary': 'off',
    'unicorn/no-nested-ternary': 'warn',
    'unicorn/no-new-buffer': 'warn',
    'unicorn/no-null': 'warn',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-reduce': 'off',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/no-unused-properties': 'off',
    'unicorn/no-useless-undefined': 'warn',
    'unicorn/no-zero-fractions': 'warn',
    'unicorn/number-literal-case': 'warn',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-dataset': 'error',
    'unicorn/prefer-event-key': 'error',
    'unicorn/prefer-flat-map': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-optional-catch-binding': 'off',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-replace-all': 'off',
    'unicorn/prefer-set-has': 'off',
    'unicorn/prefer-spread': 'warn',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-trim-start-end': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/prevent-abbreviations': 'error',
    'unicorn/string-content': 'off',
    'unicorn/throw-new-error': 'error',
  },
}
