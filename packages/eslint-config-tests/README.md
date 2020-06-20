# Eslint Tests Configuration

[![npm version](https://badge.fury.io/js/%40sanv%2Feslint-config-tests.svg)](https://badge.fury.io/js/%40sanv%2Feslint-config-tests)

1. Install the correct version of package, which are listed by the command:

```bash
npm install "@sanv/eslint-config-tests" --save-dev
`````

2. Add next line to your `.eslintrc.js`:

```js
module.exports = {
  plugins: ['prettier', 'react', 'jsx-a11y', 'jest'],
  extends: [
    '@sanv/eslint-config-tests',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
}
```
