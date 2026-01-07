import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import apiService from '../utils/api'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const user = ref(null)
  const isAuthenticated = computed(() => !!user.value)

  const isLoading = ref(false)

  function persistUser() {
    if (!process.client) return
    if (user.value) localStorage.setItem('auth_user', JSON.stringify(user.value))
    else localStorage.removeItem('auth_user')
  }

  function loadUserFromStorage() {
    if (!process.client) return
    const stored = localStorage.getItem('auth_user')
    if (stored) user.value = JSON.parse(stored)
  }

  async function fetchUser() {
    if (user.value) return user.value

    // Try localStorage first
    if (process.client) {
      const stored = localStorage.getItem('auth_user')
      if (stored) {
        user.value = JSON.parse(stored)
        return user.value
      }
    }

    isLoading.value = true
    try {
      // Call Nuxt API (me.get.js) → reads cookie
      const res = await $fetch('/api/me', { credentials: 'include' })
      if (res?.status === 'success' && res.user) {
        user.value = res.user
        persistUser()
        return user.value
      }
      user.value = null
      persistUser()
      return null
    } catch {
      user.value = null
      persistUser()
      return null
    } finally {
      isLoading.value = false
    }
  }

  async function login(params) {
    const res = await apiService.post('/login', params, { withCredentials: true })
    if (res?.status === 'success' && res.user) {
      user.value = res.user
      persistUser()
      return { success: true }
    }
    return { success: false, message: res?.message || 'Login failed' }
  }

  async function logout() {
    try {
      await $fetch('/api/logout', { method: 'POST', credentials: 'include' })
    } catch {}
    user.value = null
    if (process.client) localStorage.removeItem('auth_user')
    router.push('/login')
  }
  
  if (process.client) loadUserFromStorage()


  function setUser(userData) {
    user.value = userData || null
    persistUser()
  }

  return { user, isAuthenticated, fetchUser, login, logout, isLoading, setUser }
})
