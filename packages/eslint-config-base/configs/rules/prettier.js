module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        semi: false,
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
        quoteProps: 'consistent',
        useTabs: false,
        endOfLine: 'lf',
      },
    ],
  },
}
