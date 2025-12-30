<template>
  <header class="bg-slate-600 text-white sticky top-0 z-50 shadow-lg">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">

      <!-- Logo -->
      <h1 class="text-2xl font-extrabold tracking-wide">
        <span class="text-yellow-400">Ked</span>Craft
      </h1>

      <!-- Nav -->
      <nav class="flex gap-8">
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
    </div>
  </header>
</template>

<script setup>
const route = useRoute()

const menu = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' }
]
</script>
