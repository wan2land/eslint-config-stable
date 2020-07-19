# ESLint Config Stable

<p>
  <a href="https://github.com/wan2land/eslint-config-stable/actions?query=workflow%3A%22Node.js+CI%22"><img alt="Build" src="https://img.shields.io/github/workflow/status/wan2land/eslint-config-stable/Node.js%20CI?logo=github&style=flat-square" /></a>
  <a href="https://npmcharts.com/compare/eslint-config-stable?minimal=true"><img alt="Downloads" src="https://img.shields.io/npm/dt/eslint-config-stable.svg?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/eslint-config-stable"><img alt="Version" src="https://img.shields.io/npm/v/eslint-config-stable.svg?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/eslint-config-stable"><img alt="License" src="https://img.shields.io/npm/l/eslint-config-stable.svg?style=flat-square" /></a>
  <br />
  <a href="https://david-dm.org/wan2land/eslint-config-stable"><img alt="dependencies Status" src="https://img.shields.io/david/wan2land/eslint-config-stable.svg?style=flat-square" /></a>
  <a href="https://david-dm.org/wan2land/eslint-config-stable?type=dev"><img alt="devDependencies Status" src="https://img.shields.io/david/dev/wan2land/eslint-config-stable.svg?style=flat-square" /></a>
</p>

ESLint config based on [Javascript Popular Convention](http://sideeffect.kr/popularconvention#javascript).

And Major ESLint plugins at once!

- `eslint-plugin-import`
- `eslint-plugin-unicorn`
- `@typescript-eslint/eslint-plugin`

## Installaion

```bash
npm install eslint-config-stable -D
```

## Usage

Available Configs.

- `stable/javascript` (default, alias `stable`)
- `stable/typescript`

### Javascript

`.eslintrc.js`

```js
module.exports = {
  extends: [
    'stable',
  ],
}
```

### Typescript

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

### Vue + Typescript

`.eslintrc.js`

```js
module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/essential',
    'stable',
    'stable/typescript',
  ],
  parserOptions: {
    extraFileExtensions: ['.vue'],
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
```

### Javascript + Typescript

```js

module.exports = {
  overrides: [
    {
      files: [
        '**/*.ts',
      ],
      extends: [
        'stable',
        'stable/typescript',
      ],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
    },
    {
      files: [
        '**/*.js',
      ],
      extends: [
        'stable',
      ],
    },
  ],
}
```

### Vue + Javascript + Typescript

```js
module.exports = {
  overrides: [
    {
      files: [
        '**/*.ts',
        '**/*.vue',
      ],
      parser: 'vue-eslint-parser',
      extends: [
        'plugin:vue/essential',
        'stable',
        'stable/typescript',
      ],
      parserOptions: {
        extraFileExtensions: ['.vue'],
        parser: '@typescript-eslint/parser',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
    },
    {
      files: [
        '**/*.js',
      ],
      extends: [
        'stable',
      ],
    },
  ],
}
```
