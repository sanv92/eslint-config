module.exports = {
  plugins: ['react'],
  rules: {
    // Restrict file extensions that may contain JSX (react/jsx-filename-extension)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],

    // One JSX Element Per Line (react/jsx-one-expression-per-line)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-one-expression-per-line': 'warn',

    // Disallow JSX props spreading
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': 'off',
  },
}
