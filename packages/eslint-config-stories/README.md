# Eslint Storybook Configuration

[![npm version](https://badge.fury.io/js/%40sanv%2Feslint-config-stories.svg)](https://badge.fury.io/js/%40sanv%2Feslint-config-stories)


1. Install the correct version of package, which are listed by the command:

```bash
npm install "@sanv/eslint-config-stories" --save-dev
```

2. Add next line to your `.eslintrc.js`:

```js
module.exports = {
  plugins: ['prettier', 'react', 'jsx-a11y'],
  extends: [
    '@sanv/eslint-config-stories',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
}
```
