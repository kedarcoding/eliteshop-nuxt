<template>
  <header class="bg-slate-600 text-white sticky top-0 z-50 shadow-lg">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">

      <!-- Logo -->
      <h1 class="text-2xl font-extrabold tracking-wide">
        <span class="text-yellow-400">Ked</span>Craft
      </h1>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-8">
        <NuxtLink
          v-for="item in menu"
          :key="item.to"
          :to="item.to"
          class="relative transition font-bold text-lg"
          :class="{
            'text-yellow-400': route.path === item.to,
            'hover:text-yellow-400': route.path !== item.to
          }"
        >
          {{ item.label }}

          <!-- Active underline -->
          <span
            v-if="route.path === item.to"
            class="absolute -bottom-1 left-0 w-full h-[2px] bg-yellow-400 rounded-full"
          />
        </NuxtLink>
      </nav>

      <!-- Mobile Hamburger -->
      <div class="md:hidden flex items-center">
        <button @click="isOpen = !isOpen" class="focus:outline-none">
          <svg
            v-if="!isOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="isOpen" class="md:hidden bg-slate-700">
        <nav class="flex flex-col py-4 px-6 gap-4">
          <NuxtLink
            v-for="item in menu"
            :key="item.to"
            :to="item.to"
            @click="isOpen = false"
            class="font-bold text-lg transition"
            :class="{
              'text-yellow-400': route.path === item.to,
              'hover:text-yellow-400': route.path !== item.to
            }"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const route = useRoute()
const isOpen = ref(false)

const menu = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' }
]
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
