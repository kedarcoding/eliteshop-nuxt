<template>
  <section class="container mx-auto px-6 py-10">
    <h2 class="text-2xl font-bold mb-6">All Products</h2>

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">

      <!-- LEFT : PRODUCTS -->
      <div class="lg:col-span-5">
        <!-- <div v-if="loading" class="text-center py-10">
          Loading...
        </div> -->

        <div v-if="error" class="text-red-500 text-center py-10">
          {{ error }}
        </div>

        <!-- ✅ Animated Grid -->
        <TransitionGroup
          name="grid"
          tag="div"
          class="grid md:grid-cols-4 sm:grid-cols-2 gap-6"
          v-else-if="products.length"
        >
          <ProductCard
            v-for="p in products"
            :key="p.id"
            :product="p"
          />
        </TransitionGroup>

        <!-- Pagination -->
        <div v-if="pagination.last_page > 1" class="flex justify-center mt-8 gap-3">
          <button
            class="px-4 py-2 bg-gray-200 rounded"
            :disabled="pagination.current_page === 1"
            @click="fetchProducts(pagination.current_page - 1)"
          >
            Prev
          </button>

          <span class="px-4 py-2 text-sm">
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
      </div>
    </div>
  </section>
</template>



<script setup>
import { onMounted, computed } from 'vue'
import { useProductStore } from '../stores/productStore'
import ProductCard from '../components/ProductCard.vue'
import { useCartStore } from '../stores/cart'
import CartItem from '../components/CartItem.vue'
import { useLoaderStore } from '../stores/loader'

const cart = useCartStore()

// On mount, fetch cart items from API


const productStore = useProductStore()



const products = computed(() => productStore.products)
const pagination = computed(() => productStore.pagination)
// const loading = computed(() => productStore.loading)
const error = computed(() => productStore.error)
const loader = useLoaderStore()

const fetchProducts = (page = 1) => {
  productStore.fetchProducts(page)
}

onMounted(async () => {
  loader.start()
  await cart.fetchCart()
  fetchProducts(1)
  loader.stop()
})

</script>

