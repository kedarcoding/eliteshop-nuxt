<!-- <template>
  <section class="container mx-auto px-6 py-10">
    <h2 class="text-2xl font-bold mb-6">All Products</h2>

    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      <ProductCard v-for="p in products" :key="p.id" :product="p" />
    </div>
  </section>
</template> -->

<!-- <script setup>
import ProductCard from '~/components/ProductCard.vue'

const products = [
  { id: 1, name: 'iPhone 15', price: 78000, category: 'Mobiles', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9' },
  { id: 2, name: 'MacBook Air', price: 99999, category: 'Laptops', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' },
  { id: 3, name: 'Nike Shoes', price: 4999, category: 'Fashion', image: 'https://images.unsplash.com/photo-1528701800489-20be0c4a9a43' },
  { id: 4, name: 'Smart Watch', price: 3999, category: 'Gadgets', image: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f' }
]
</script> -->
<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from '~/components/ProductCard.vue'
import api from '../utils/api'

const products = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const res = await api.get('/products')

    // backend ke structure ke hisab se adjust karo 👇
    products.value = res?.products || res?.data || []
  } catch (e) {
    console.error(e)
    error.value = 'Failed to load products'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <p v-if="loading">Loading...</p>
    <p v-if="error" class="text-red-500">{{ error }}</p>

    <div
      v-if="products.length"
      class="grid md:grid-cols-4 sm:grid-cols-2 gap-6"
    >
      <ProductCard
        v-for="p in products"
        :key="p.id"
        :product="p"
      />
    </div>
  </div>
</template>

