import { getCookie } from 'h3'

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'auth_token')
  if (!token) return { status: 'error', message: 'Unauthorized' }

  try {
    const laravelRes = await $fetch('http://localhost:8000/api/getMe', {
      headers: { Authorization: `Bearer ${token}` },
      method: 'GET'
    })
    if (laravelRes?.status === 'success') return { status: 'success', user: laravelRes.user }
    return { status: 'error', message: 'Invalid token' }
  } catch (err) {
    return { status: 'error', message: 'Token verification failed' }
  }
})
