
function say(message) {
  return `say hello ${message}!`
}

const messages = []

for (let i = 0; i < 20; i++) {
  if (i === 0) {
    continue
  }
  messages.push(say(i))
}
