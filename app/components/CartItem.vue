<template>
  <div class="flex gap-4 bg-white shadow rounded-xl p-4">
    <!-- image ab product ke andar hai -->
    <img :src="item.product.image || '/images/placeholder.png'" class="w-20 h-20 rounded-xl object-cover" />

    <div class="flex-1">
      <!-- name product ke andar -->
      <h3 class="font-semibold text-lg">{{ item.product.name }}</h3>

      <!-- price product ke sell_price se -->
      <p class="text-gray-500 text-sm">₹ {{ item.price }}</p>

      <div class="flex items-center gap-4 mt-3">
        <button
          class="bg-gray-200 px-3 rounded"
          @click="cart.decrease(item.id)"
        >−</button>

        <span class="font-bold">{{ item.qty }}</span>

        <button
          class="bg-gray-200 px-3 rounded"
          @click="cart.increase(item.id)"
        >+</button>

        <button
          class="ml-auto text-red-500"
          @click="cart.remove(item.id)"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useCartStore } from '../stores/cart'
const cart = useCartStore()
const props = defineProps({ item: Object })
</script>
