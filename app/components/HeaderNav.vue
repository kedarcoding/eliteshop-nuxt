<template>
  <header class="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-white sticky top-0 z-50 shadow-xl">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">

      <!-- Logo -->
      <h1 class="text-3xl font-extrabold tracking-wide">
        <span class="text-yellow-400">eLight</span>Shop
      </h1>

      <!-- Search -->
      <div class="hidden md:flex items-center w-1/3">
        <input
          v-model="search"
          type="text"
          placeholder="Search products..."
          class="w-full px-4 py-2 rounded-full text-gray-900 outline-none"
        />
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="item in menu"
          :key="item.to"
          :to="item.to"
          class="relative transition font-semibold"
          :class="{
            'text-yellow-300': route.path === item.to,
            'hover:text-yellow-300': route.path !== item.to
          }"
        >
          {{ item.label }}
        </NuxtLink>

        <!-- Cart -->
        <NuxtLink to="/cart" class="relative font-semibold hover:text-yellow-300">
          🛒 Cart
          <span
            v-if="cartCount"
            class="absolute -top-3 -right-3 bg-yellow-400 text-gray-900 text-xs font-bold px-2 rounded-full"
          >
            {{ cartCount }}
          </span>
        </NuxtLink>

        <!-- Login / Account (Conditional) -->
        <NuxtLink
  v-if="!isLoggedIn"
  to="/login"
  @click="isOpen=false"
  class="font-semibold hover:text-yellow-300 flex items-center gap-2"
>
  Login
  <span class="border border-gray-300 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
    ?
  </span>
</NuxtLink>



        <NuxtLink
          v-else
          to="/account"
          class="font-semibold hover:text-yellow-300"
        >
          My Account
        </NuxtLink>
      </nav>

      <!-- Mobile Hamburger -->
      <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
        <svg v-if="!isOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="isOpen" class="md:hidden bg-gray-800 border-t border-gray-700">
        <div class="flex flex-col py-4 px-6 gap-4">

          <input
            v-model="search"
            type="text"
            placeholder="Search products..."
            class="px-4 py-2 rounded-full text-gray-900 outline-none"
          />

          <NuxtLink
            v-for="item in menu"
            :key="item.to"
            :to="item.to"
            @click="isOpen = false"
            class="font-semibold transition"
            :class="{
              'text-yellow-300': route.path === item.to,
              'hover:text-yellow-300': route.path !== item.to
            }"
          >
            {{ item.label }}
          </NuxtLink>

          <NuxtLink to="/cart" @click="isOpen=false" class="font-semibold hover:text-yellow-300">
            🛒 Cart ({{ cartCount }})
          </NuxtLink>

          <!-- Login / Account (Mobile) -->
          <NuxtLink
            v-if="!isLoggedIn"
            to="/login"
            @click="isOpen=false"
            class="font-semibold hover:text-yellow-300"
          >
            Login ?
          </NuxtLink>

          <NuxtLink
            v-else
            to="/account"
            @click="isOpen=false"
            class="font-semibold hover:text-yellow-300"
          >
            My Account
          </NuxtLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const route = useRoute()
const isOpen = ref(false)
const search = ref('')
const cartCount = ref(2)

// 🔐 later replace with real auth
const isLoggedIn = ref(false)

const menu = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Categories', to: '/categories' },
  { label: 'Deals', to: '/deals' }
]
</script>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
