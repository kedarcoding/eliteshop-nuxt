import { defineStore } from 'pinia'
import apiService from '../utils/api'
import { useAuthStore } from '../stores/auth'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const loading = ref(false)
    const cartTotal = computed(() =>
      items.value.reduce((t, i) => t + i.price * i.qty, 0)
    )

  const cartCount = computed(() =>
    items.value.reduce((t, i) => t + i.qty, 0)
  )

  // 👉 fetch user cart from backend
  const fetchCart = async () => {
    console.log(cartCount)
    const auth = useAuthStore()
    if (!auth.user) return   // not logged in

    loading.value = true
    try {
      const res = await apiService.get('/cart')
      // console.log(res.items)
      items.value = res?.items || []
    } finally {
      loading.value = false
    }
  }

    // 👉 add item (login required + save DB)
  const addToCart = async (product, qty = 1) => {
    const auth = useAuthStore()
    await auth.fetchUser()

    if (!auth.user) return

    const res = await apiService.post('/cart', {
      product_id: product.id,
      qty
    })

    items.value = res?.items || res?.data?.items || []
  }

  const increase = async (id) => {
	const res = await apiService.patch(`/cart/${id}/increase`)
	items.value = res?.items || res?.data?.items || []
	}

  const decrease = async (id) => {
	const res = await apiService.patch(`/cart/${id}/decrease`)
	items.value = res?.items || res?.data?.items || []
	}

  const remove = async (id) => {
	const res = await apiService.delete(`/cart/${id}`)
	items.value = res?.items || res?.data?.items || []
	}

  const clear = async () => {
		await apiService.delete('/cart/clear')
		items.value = []
	}

  return {
    items,
    loading,
    cartTotal,
    cartCount,
    fetchCart,
    addToCart,
    increase,
    decrease,
    remove,
    clear
  }
})
