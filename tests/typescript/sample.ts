
interface User {
  id: string
}

class UserFinder {
  findUser(userId: string): User {
    return { id: userId }
  }
}

function say(message: string): string {
  return `say hello ${message}!`
}

const messages = [] as string[]
const userFinder = new UserFinder()

for (let i = 0; i < 20; i++) {
  if (i === 0) {
    continue
  }
  messages.push(say(userFinder.findUser(`${i}`).id))
}
