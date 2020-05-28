const path = require('path')

const { CLIEngine } = require('eslint')


describe('eslint javascript rules', () => {
  it('test sample', () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: path.resolve(__dirname, 'javascript/.eslintrc.js'),
    })

    const result = cli.executeOnFiles(path.resolve(__dirname, 'javascript/sample.js'))
    const messages = [].concat(...result.results.map((result) => result.messages))

    expect(messages).toEqual([])
  })
})

describe('eslint typescript rules', () => {
  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: path.resolve(__dirname, 'typescript/.eslintrc.js'),
  })

  for (const file of ['sample1.ts', 'sample2.ts']) {
    it(`test ${file}`, () => {
      const result = cli.executeOnFiles(path.resolve(__dirname, 'typescript', file))
      const messages = [].concat(...result.results.map((result) => result.messages))
  
      expect(messages).toEqual([])
    })  
  }
})
