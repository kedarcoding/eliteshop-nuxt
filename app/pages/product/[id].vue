<template>
  <section class="container mx-auto px-6 py-10" v-if="product">
    <div class="grid md:grid-cols-2 gap-10">
      <img
        :src="product.image || '/images/placeholder.png'"
        class="rounded-2xl shadow-xl"
      />

      <div>
        <h1 class="text-3xl font-bold">
          {{ product.name }}
        </h1>

        <p class="mt-2 text-gray-500">
          {{ product.category?.name }}
        </p>

        <p class="mt-4 text-lg">
          {{ product.description }}
        </p>

        <div class="mt-6 flex items-center gap-3">
          <h2 class="text-3xl font-extrabold text-blue-700">
            ₹{{ product.sell_price }}
          </h2>

          <span
            v-if="Number(product.original_price) > Number(product.sell_price)"
            class="text-gray-400 line-through text-lg"
          >
            ₹{{ product.original_price }}
          </span>
        </div>

        <span
          v-if="product.is_top"
          class="mt-3 inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs"
        >
          ⭐ Top Product
        </span>

        <button class="mt-6 px-6 py-3 bg-blue-700 text-white rounded-full" @click="cart.addToCart(product, 1)">
          Add to Cart
        </button>
      </div>
    </div>
  </section>

  <div v-else-if="pending" class="p-10 text-center">
    Loading...
  </div>

  <div v-else class="p-10 text-center text-gray-600">
    Product not found
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '../utils/api'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()


const route = useRoute()

const product = ref(null)
const pending = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    pending.value = true
    error.value = null

    const res = await api.get(`/products/${route.params.id}`)

    console.log('API RESPONSE =>', res.data)

    product.value = res.data?.data || res.data || null
  } catch (e) {
    console.error(e)
    error.value = 'Failed to load product'
    product.value = null
  } finally {
    pending.value = false
  }
})

</script>

