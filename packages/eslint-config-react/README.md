# Eslint React Configuration

[![npm version](https://badge.fury.io/js/%40sanv%2Feslint-config-react.svg)](https://badge.fury.io/js/%40sanv%2Feslint-config-react)

1. Install the correct version of package, which are listed by the command:

```bash
npm install "@sanv/eslint-config-react" --save-dev
```

2. Add next line to your `.eslintrc.js`:

```js
module.exports = {
  plugins: ['prettier', 'react', 'jsx-a11y'],
  extends: [
    '@sanv/eslint-config-react',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
}
```
