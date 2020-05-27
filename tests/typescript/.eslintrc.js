module.exports = {
  extends: [
    '../../javascript',
    '../../typescript',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
