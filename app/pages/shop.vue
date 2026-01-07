<template>
  <section class="container mx-auto px-6 py-10">
    <h2 class="text-2xl font-bold mb-6">All Products</h2>

    <div v-if="loading" class="text-center py-10">
      Loading...
    </div>

    <div v-else-if="error" class="text-red-500 text-center py-10">
      {{ error }}
    </div>

    <div
      v-else-if="products.length"
      class="grid md:grid-cols-4 sm:grid-cols-2 gap-6"
    >
      <ProductCard
        v-for="p in products"
        :key="p.id"
        :product="p"
      />
    </div>

    <!-- Pagination -->
    <div v-if="pagination.last_page > 1" class="flex justify-center mt-8 gap-3">
      <button
        class="px-4 py-2 bg-gray-200 rounded"
        :disabled="pagination.current_page === 1"
        @click="fetchProducts(pagination.current_page - 1)"
      >
        Prev
      </button>

      <span class="px-4 py-2">
        Page {{ pagination.current_page }} / {{ pagination.last_page }}
      </span>

      <button
        class="px-4 py-2 bg-gray-200 rounded"
        :disabled="pagination.current_page === pagination.last_page"
        @click="fetchProducts(pagination.current_page + 1)"
      >
        Next
      </button>
    </div>
  </section>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useProductStore } from '../stores/productStore'
import ProductCard from '../components/ProductCard.vue'

const productStore = useProductStore()

const products = computed(() => productStore.products)
const pagination = computed(() => productStore.pagination)
const loading = computed(() => productStore.loading)
const error = computed(() => productStore.error)

const fetchProducts = (page = 1) => {
  productStore.fetchProducts(page)
}

onMounted(() => fetchProducts(1))
</script>
