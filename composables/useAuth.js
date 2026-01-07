export const useAuth = () => {
  const user = useState('user', () => null)

  const fetchUser = async () => {
    try {
      user.value = await $fetch('/api/me')
    } catch {
      user.value = null
    }
  }

  return { user, fetchUser }
}
