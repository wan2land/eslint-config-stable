const { version: pkgVersion } = require('../package.json')

function version() {
  return pkgVersion
}

function say(message) {
  return `say hello ${message}! v${version()}`
}

const messages = []

for (let i = 0; i < 20; i++) {
  if (i === 0) {
    continue
  }
  messages.push(say(i))
}
