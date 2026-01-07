import { setCookie, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const res = await $fetch('http://localhost:8000/api/login', {
    method: 'POST',
    body
  })

  if (res.status !== 'success') {
    return { status: 'error', message: res.message }
  }

  // 🔹 Only set token in httpOnly cookie (secure)
  setCookie(event, 'auth_token', res.token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/'
  })
  deleteCookie(event, 'auth_user', { path: '/' })

  // 🔹 frontend UI ke liye user object return karo
  return { status: 'success', user: res.user }
})
