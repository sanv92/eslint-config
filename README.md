# ESLint Configs

## Installation:

```
npm install --save-dev @sanv/eslint-config-base
npm install --save-dev @sanv/eslint-config-import
npm install --save-dev @sanv/eslint-config-import-typescript
npm install --save-dev @sanv/eslint-config-react
npm install --save-dev @sanv/eslint-config-react-typescript
npm install --save-dev @sanv/eslint-config-stories
npm install --save-dev @sanv/eslint-config-stories-typescript
npm install --save-dev @sanv/eslint-config-tests
npm install --save-dev @sanv/eslint-config-tests-typescript
npm install --save-dev @sanv/eslint-config-typescript
npm install --save-dev @sanv/eslint-config-unicorn
npm install --save-dev @sanv/eslint-config-unicorn-typescript
```

## Usage:

#### eslint-config-base
```js
module.exports = {
  plugins: ['prettier'],
  extends: [
    '@sanv/eslint-config-base',
    'plugin:prettier/recommended',
  ],
}
```

#### eslint-config-import
```js
module.exports = {
  plugins: ['import'],
  extends: [
    '@sanv/eslint-config-import',
  ],
}
```

#### eslint-config-import-typescript
```js
module.exports = {
  plugins: ['import'],
  extends: [
    '@sanv/eslint-config-import-typescript',
  ],
}
```

#### eslint-config-react
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

#### eslint-config-react-typescript
```js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react', 'jsx-a11y', '@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  extends: [
    '@sanv/eslint-config-react-typescript',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
}
```

#### eslint-config-stories
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

#### eslint-config-stories-typescript
```js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react', 'jsx-a11y', '@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  extends: [
    '@sanv/eslint-config-stories-typescript',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
}
```

#### eslint-config-tests
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

#### eslint-config-tests-typescript
```js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react', 'jsx-a11y', 'jest', '@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  extends: [
    '@sanv/eslint-config-tests-typescript',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
}
```

#### eslint-config-tests-typescript
```js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  extends: [
    '@sanv/eslint-config-tests-typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
}
```

#### eslint-config-unicorn
```js
module.exports = {
  plugins: ['prettier'],
  extends: [
    '@sanv/eslint-config-unicorn',
    'plugin:prettier/recommended',
  ],
}
```

#### eslint-config-unicorn-typescript
```js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  extends: [
    '@sanv/eslint-config-unicorn-typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
}
```

## TypeScript Configuration:
[https://github.com/SanderV1992/tsconfig/blob/master/tsconfig.json](https://github.com/SanderV1992/tsconfig/blob/master/tsconfig.json)
