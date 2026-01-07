import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(async () => {
  const authStore = useAuthStore()
  if (!authStore.user) { // only call API if user not in store
    try {
      const data = await $fetch('/api/me')
      if (data?.status === 'success') authStore.user = data.user
    } catch {
      authStore.user = null
    }
  }
})
