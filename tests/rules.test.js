const path = require('path')

const { CLIEngine } = require('eslint')


describe('eslint config rules', () => {
  it('test javascript rules', () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: path.resolve(__dirname, 'javascript/.eslintrc.js'),
    })

    const result = cli.executeOnFiles(path.resolve(__dirname, 'javascript/sample.js'))
    const messages = [].concat(...result.results.map((result) => result.messages))

    expect(messages).toEqual([])
  })

  it('test typescript rules', () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: path.resolve(__dirname, 'typescript/.eslintrc.js'),
    })

    const result = cli.executeOnFiles(path.resolve(__dirname, 'typescript/sample.ts'))
    const messages = [].concat(...result.results.map((result) => result.messages))

    expect(messages).toEqual([])
  })
})
