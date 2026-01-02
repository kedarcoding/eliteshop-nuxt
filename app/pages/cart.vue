<template>
  <section class="container mx-auto px-6 py-10">
    <h2 class="text-2xl font-bold mb-6">Your Cart</h2>

    <div v-if="!cart.items.length" class="text-gray-500">
      Cart is empty.
    </div>

    <div class="space-y-4" v-else>
      <CartItem v-for="i in cart.items" :key="i.id" :item="i" />

      <div class="flex justify-between items-center mt-6 p-4 bg-slate-100 rounded-xl">
        <span class="font-bold text-xl">Total: ₹ {{ cart.cartTotal }}</span>

        <NuxtLink
          to="/checkout"
          class="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl"
        >
          Place Order
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import CartItem from '@/components/CartItem.vue'
import { useCartStore } from '../stores/cart'
const cart = useCartStore()
</script>
