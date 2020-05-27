# ESLint Config Stable

[![Downloads](https://img.shields.io/npm/dt/eslint-config-stable.svg?style=flat-square)](https://npmcharts.com/compare/eslint-config-stable?minimal=true)
[![Version](https://img.shields.io/npm/v/eslint-config-stable.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-stable)
[![License](https://img.shields.io/npm/l/eslint-config-stable.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-stable)

ESLint config based on [Javascript Popular Convention](http://sideeffect.kr/popularconvention#javascript).

## Installaion

```bash
npm install eslint-config-stable -D
```

## Usage

Available Configs.

- `stable/javascript` (default, alias `stable`)
- `stable/typescript`

`.eslintrc.js`

```js
module.exports = {
  extends: [
    'stable',
    'stable/typescript',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
```
