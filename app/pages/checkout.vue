<template>
  <section class="container mx-auto px-6 py-10">
    <h2 class="text-2xl font-bold mb-6">Checkout</h2>

    <form @submit.prevent="placeOrder" class="grid md:grid-cols-2 gap-6">
      <!-- Address -->
      <div class="space-y-4 bg-white p-6 rounded-xl shadow">
        <h3 class="font-semibold text-lg">Shipping Address</h3>

        <input v-model="form.name" class="input" placeholder="Full Name" required />
        <input v-model="form.phone" class="input" placeholder="Phone" required />
        <textarea v-model="form.address" class="input" placeholder="Address" required />
      </div>

      <!-- Payment -->
      <div class="space-y-4 bg-white p-6 rounded-xl shadow">
        <h3 class="font-semibold text-lg">Payment</h3>

        <label class="flex items-center gap-3">
          <input type="radio" value="cod" v-model="form.payment" />
          Cash on Delivery
        </label>

        <label class="flex items-center gap-3">
          <input type="radio" value="online" v-model="form.payment" />
          Dummy Online Payment
        </label>

        <button
          class="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl"
        >
          Place Order
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
const router = useRouter()

const form = reactive({
  name: '',
  phone: '',
  address: '',
  payment: 'cod'
})

function placeOrder() {
  cart.clear()
  router.push('/order-success')
}
</script>

<style>
.input {
  @apply w-full border rounded-xl px-4 py-2 outline-none;
}
</style>
