module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        printWidth: 80,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
    ],
  },
};
