import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [
      { id: 1, name: "Smart Watch", price: 1999, qty: 1, image: "/watch.jpg" },
      { id: 2, name: "Wireless Earbuds", price: 1499, qty: 2, image: "/buds.jpg" }
    ]
  }),

  getters: {
    cartTotal: (state) =>
      state.items.reduce((t, i) => t + i.price * i.qty, 0),

    cartCount: (state) =>
      state.items.reduce((t, i) => t + i.qty, 0)
  },

  actions: {
    increase(id) {
      const item = this.items.find(i => i.id === id)
      if (item) item.qty++
    },

    decrease(id) {
      const item = this.items.find(i => i.id === id)
      if (item && item.qty > 1) item.qty--
    },

    remove(id) {
      this.items = this.items.filter(i => i.id !== id)
    },

    clear() {
      this.items = []
    }
  }
})
