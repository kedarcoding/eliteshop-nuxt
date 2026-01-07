import { defineStore } from 'pinia'
import api from '../utils/api'   // <- yaha use karo

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],            // product list
    pagination: {            // pagination meta
      current_page: 1,
      last_page: 1,
      per_page: 10,
      total: 0
    },
    singleProduct: null,     // slug based product
    loading: false,
    error: null
  }),

  actions: {
    // fetch paginated products
    async fetchProducts(page = 1) {
      this.loading = true
      this.error = null
      try {
        const res = await api.get(`/products?page=${page}`)  // <- api service use

        // backend returns { status: true, data: [...], meta: {...} }
        this.products = res.data
        this.pagination = res.meta

      } catch (err) {
        this.error = err.message || 'Failed to fetch products'
      } finally {
        this.loading = false
      }
    },

    // fetch single product by slug
    async fetchProductBySlug(slug) {
      // check if already in store
      const found = this.products.find(p => p.slug === slug)
      if (found) {
        this.singleProduct = found
        return found
      }

      this.loading = true
      this.error = null
      try {
        const res = await api.get(`/products/${slug}`)  // <- api service use
        this.singleProduct = res.data
        return this.singleProduct
      } catch (err) {
        this.error = err.message || 'Failed to fetch product'
        this.singleProduct = null
      } finally {
        this.loading = false
      }
    }
  }
})
