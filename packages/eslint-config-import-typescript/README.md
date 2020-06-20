# Eslint Import Configuration with Typescript Support

[![npm version](https://badge.fury.io/js/%40sanv%2Feslint-config-import-typescript.svg)](https://badge.fury.io/js/%40sanv%2Feslint-config-import-typescript)

1. Install the correct version of package, which are listed by the command:

```bash
npm install "@sanv/eslint-config-import-typescript" --save-dev
```

2. Add next line to your `.eslintrc.js`:

```js
module.exports = {
  plugins: ['import'],
  extends: [
    '@sanv/eslint-config-import-typescript',
  ],
}
```
