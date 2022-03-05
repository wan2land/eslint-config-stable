const path = require('path')

const { ESLint } = require('eslint')


describe('eslint javascript rules', () => {
  it('test sample', async () => {
    const cli = new ESLint({
      useEslintrc: false,
      overrideConfigFile: path.resolve(__dirname, 'javascript/.eslintrc.js'),
    })

    const results = await cli.lintFiles(path.resolve(__dirname, 'javascript/sample.js'))

    const messages = [].concat(...results.map((result) => result.messages))

    expect(messages).toEqual([])
  })
})

describe('eslint typescript rules', () => {
  const cli = new ESLint({
    useEslintrc: false,
    overrideConfigFile: path.resolve(__dirname, 'typescript/.eslintrc.js'),
  })

  for (const file of ['sample1.ts', 'sample2.ts']) {
    it(`test ${file}`, async () => {
      const results = await cli.lintFiles(path.resolve(__dirname, 'typescript', file))
      const messages = [].concat(...results.map((result) => result.messages))
  
      expect(messages).toEqual([])
    })  
  }
})
