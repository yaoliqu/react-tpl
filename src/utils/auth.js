/**
 * token 处理
 */

const TOKEN_KEY = `token`

// eslint-disable-next-line
export default {
  get() {
    const token = localStorage.getItem(TOKEN_KEY)
    return token ? JSON.parse(token) : null
  },
  set(value) {
    return localStorage.setItem(TOKEN_KEY, JSON.stringify(value))
  },
  del() {
    return localStorage.removeItem(TOKEN_KEY)
  },
}
