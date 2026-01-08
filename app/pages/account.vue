<template>
  <section class="container mx-auto px-6 py-10">
    <h2 class="text-2xl font-bold mb-6">My Account</h2>

    <div class="grid md:grid-cols-4 gap-6">

      <!-- LEFT MENU -->
      <aside class="bg-white p-4 rounded-xl shadow space-y-3">
        <button
          class="w-full text-left px-3 py-2 rounded-lg"
          :class="tab==='profile' && 'bg-slate-100 font-semibold'"
          @click="tab='profile'"
        >
          Profile
        </button>

        <button
          class="w-full text-left px-3 py-2 rounded-lg"
          :class="tab==='addresses' && 'bg-slate-100 font-semibold'"
          @click="tab='addresses'"
        >
          Addresses
        </button>

        <button
          class="w-full text-left px-3 py-2 rounded-lg"
          :class="tab==='orders' && 'bg-slate-100 font-semibold'"
          @click="tab='orders'"
        >
          Orders
        </button>
      </aside>

      <!-- RIGHT CONTENT -->
      <main class="md:col-span-3">

        <!-- PROFILE -->
        <div v-if="tab==='profile'" class="bg-white p-6 rounded-xl shadow">
          <h3 class="font-semibold text-lg mb-3">Profile</h3>
          <p>Name: {{ auth.user?.name || 'Demo User' }}</p>
          <p>Email: {{ auth.user?.email || 'demo@example.com' }}</p>
        </div>

        <!-- 🔹 ADDRESSES COMPONENT (dynamic fields wala) -->
        <AddressManager v-if="tab==='addresses'" />

        <!-- ORDERS (as-is) -->
        <div v-if="tab==='orders'" class="bg-white p-6 rounded-xl shadow">
          <h3 class="font-semibold text-lg mb-3">My Orders</h3>

          <div v-if="!orders.length" class="text-gray-500">
            No orders yet — showing dummy data.
          </div>

          <div v-for="o in orders" :key="o.id" class="border rounded-xl p-4 mb-3">
            <p class="font-medium">Order #{{ o.id }}</p>
            <p>Status: {{ o.status }}</p>
            <p>Total: ₹{{ o.total }}</p>
          </div>
        </div>

      </main>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { useAuthStore } from "../stores/auth"
import AddressManager from "../components/address.vue"   // 👈 DYNAMIC FORM COMPONENT

const auth = useAuthStore()
const tab = ref("profile")

// (orders only — address wala kuch bhi nahi yaha)
const orders = ref([])
</script>
