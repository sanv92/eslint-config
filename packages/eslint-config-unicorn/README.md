# Eslint Unicorn Configuration

[![npm version](https://badge.fury.io/js/%40sanv%2Feslint-config-unicorn.svg)](https://badge.fury.io/js/%40sanv%2Feslint-config-unicorn)

1. Install the correct version of package, which are listed by the command:

```bash
npm install "@sanv/eslint-config-unicorn" --save-dev
```

2. Add next line to your `.eslintrc.js`:

```js
module.exports = {
  plugins: ['prettier'],
  extends: [
    '@sanv/eslint-config-unicorn',
    'plugin:prettier/recommended',
  ],
}
```
