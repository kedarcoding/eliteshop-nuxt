import { deleteCookie } from 'h3'

export default defineEventHandler(async (event) => {
  // Clear the httpOnly auth_token cookie
  deleteCookie(event, 'auth_token', { path: '/' })

  // Optional: you can also clear auth_user cookie if you used it
  // deleteCookie(event, 'auth_user', { path: '/' })

  return { status: 'success', message: 'Logged out successfully' }
})
