<template>
  <section class="container mx-auto px-6 py-10" v-if="product">
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">

      <!-- LEFT : PRODUCT -->
      <div class="lg:col-span-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

          <!-- IMAGE -->
          <div class="bg-white rounded-2xl shadow p-5 flex items-center justify-center">
            <img
              :src="product.image || '/images/placeholder.png'"
              class="max-h-[320px] object-contain"
            />
          </div>

          <!-- INFO -->
          <div>
            <p class="text-sm text-gray-500">
              {{ product.category?.name }}
            </p>

            <h1 class="text-2xl font-bold mt-1">
              {{ product.name }}
            </h1>

            <p class="mt-3 text-gray-600 text-sm leading-relaxed">
              {{ product.description }}
            </p>

            <!-- PRICE -->
            <div class="mt-5 flex items-end gap-3">
              <span class="text-3xl font-extrabold text-blue-700">
                ₹{{ product.sell_price }}
              </span>

              <span
                v-if="Number(product.original_price) > Number(product.sell_price)"
                class="text-base text-gray-400 line-through"
              >
                ₹{{ product.original_price }}
              </span>
            </div>

            <!-- TAG -->
            <span
              v-if="product.is_top"
              class="mt-3 inline-flex bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs"
            >
              ⭐ Top Product
            </span>

            <!-- ACTION -->
            <button
              class="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl text-sm font-semibold transition"
              @click="cart.addToCart(product, 1)"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <!-- RIGHT : CART (extra space) -->
      <aside class="lg:col-span-1 sticky top-24 h-fit pl-2">
        <CartItem
          v-for="i in cart.items"
          :key="i.id"
          :item="i"
        />
        <div class="flex text-lg font-bold my-1 px-2 py-2 bg-white shadow rounded-xl">
          Total:  <div class="text-green-800 pl-3 pr-2"> {{ cart.cartTotal }} </div> INR
        </div>
      </aside>

    </div>
  </section>

  <!-- STATES -->
  <div v-else-if="pending" class="p-10 text-center text-gray-500">
    Loading product...
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
import CartItem from '../../components/CartItem.vue'

const cart = useCartStore()
const route = useRoute()

const product = ref(null)
const pending = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    pending.value = true
    const res = await api.get(`/products/${route.params.id}`)
    product.value = res.data?.data || res.data || null
  } catch (e) {
    error.value = 'Failed to load product'
    product.value = null
  } finally {
    pending.value = false
  }
})
</script>
