import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '../utils/api'
import { useRouter } from 'vue-router'

const TOKEN_KEY = 'auth_token'
const USER_KEY = 'auth_user'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()

  // ---- SAFE READ (SSR friendly) ----
  const token = ref(
    process.client ? localStorage.getItem(TOKEN_KEY) : null
  )

  const user = ref(
    process.client
      ? JSON.parse(localStorage.getItem(USER_KEY) || 'null')
      : null
  )

  const isAuthenticated = computed(() => !!token.value)

  function persist() {
    if (!process.client) return

    if (token.value)
      localStorage.setItem(TOKEN_KEY, token.value)
    else
      localStorage.removeItem(TOKEN_KEY)

    if (user.value)
      localStorage.setItem(USER_KEY, JSON.stringify(user.value))
    else
      localStorage.removeItem(USER_KEY)
  }

  // ---- VALIDATE TOKEN ----
  async function validateToken() {
    if (!token.value) return
    try {
      await api.get('/profile')
    } catch {
      token.value = null
      user.value = null
      persist()
    }
  }

  // ---- LOGIN ----
  async function login(params = {}) {
    try {
      const data = await api.post('/login', params)

      if (data?.status !== 'error' && data?.token) {
        token.value = data.token
        user.value = data.user
        persist()
        return { success: true }
      }

      return { success: false, message: data?.message || 'Invalid credentials' }
    } catch (err) {
      console.error('Login error:', err)
      return {
        success: false,
        message: err?.response?.data?.message || err.message || 'Login failed',
      }
    }
  }

  // ---- REGISTER ----
  async function register(params = {}) {
    try {
      const data = await api.post('/register', params)

      if (data?.status !== 'error' && data?.token) {
        token.value = data.token
        user.value = data.user
        persist()
        return { success: true }
      }

      return {
        success: false,
        message: data?.message || 'Registration failed: invalid response',
      }
    } catch (err) {
      console.error('Register error:', err)
      return {
        success: false,
        message: err?.response?.data?.message || err.message || 'Registration failed',
      }
    }
  }

  // ---- LOGOUT ----
  function logout() {
    token.value = null
    user.value = null
    persist()

    router.push({
      name: 'login', // make sure route name is lowercase if your page is /login
    })
  }

  return {
    token,
    user,
    isAuthenticated,
    login,
    register,
    logout,
    validateToken,
  }
})
