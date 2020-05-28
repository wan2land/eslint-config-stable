
interface User {
  id: string
}

class UserFinder {
  findUser(userId: string): User {
    return this._request(userId)
  }

  _request(userId: string) {
    const headers = {
      'host': 'wani.kr',
      'content-type': 'application/json',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      '_unknown': '??',
    }
    return request<User>(JSON.stringify({ id: userId }), {
      'host': headers.host,
      'content-type': headers['content-type'],
      'Accept': headers.Accept,
      'Accept-Encoding': headers['Accept-Encoding'],
      'X-Unknown-Header': headers._unknown,
    })
  }
}

function request<P>(body: string, headers: Record<string, any>): P | null {
  if (body && Object.keys(headers).length > 0) {
    return {
      id: '1',
      birthYear: '2020',
      birth_month: '12',
    } as any as P
  }
  return null
}

const messages = [] as string[]
const userFinder = new UserFinder()

for (let i = 0; i < 20; i++) {
  if (i === 0) {
    continue
  }
  messages.push(userFinder.findUser(`${i}`).id)
}
