module.exports = {
  plugins: ['react'],
  rules: {
    // Restrict file extensions that may contain JSX (react/jsx-filename-extension)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['warn', { extensions: ['.js'] }],

    // One JSX Element Per Line (react/jsx-one-expression-per-line)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-one-expression-per-line': 'warn',
  },
}
