
function say(message: string): string {
  return `say hello ${message}!`
}

const messages = [] as string[]

for (let i = 0; i < 20; i++) {
  if (i === 0) {
    continue
  }
  messages.push(say(i))
}
