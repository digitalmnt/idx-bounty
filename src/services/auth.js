export const isBrowser = () => typeof window !== 'undefined'

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("idxUser")
    ? JSON.parse(window.localStorage.getItem("idxUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("idxUser", JSON.stringify(user))


export const handleLogin = ({ username, password }) => {
  if (username === `john` && password === `pass`) {
    return setUser({
      username: `john`,
      name: `Johnny`,
      email: `johnny@example.org`,
    })
  }
  return false
}

export const isLoggedIn = () => {
  const user = getUser()
  console.log(user, 'user', !!user.username, '!!user.username')
  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}
