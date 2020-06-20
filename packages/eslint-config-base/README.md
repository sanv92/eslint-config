# Eslint Basic Configuration

[![npm version](https://badge.fury.io/js/%40sanv%2Feslint-config-base.svg)](https://badge.fury.io/js/%40sanv%2Feslint-config-base)

1. Install the correct version of package, which are listed by the command:

```bash
npm install "@sanv/eslint-config-base" --save-dev
```

2. Add next line to your `.eslintrc.js`:

```js
module.exports = {
  plugins: ['prettier'],
  extends: [
    '@sanv/eslint-config-base',
    'plugin:prettier/recommended',
  ],
}
```
