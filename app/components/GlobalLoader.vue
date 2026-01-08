<template>
  <transition name="fade">
    <div
      v-if="loader.loading"
      class="fixed inset-0 z-[9999] bg-white/70 backdrop-blur-sm flex items-center justify-center"
    >
      <div class="flex flex-col items-center gap-3">
        <div class="h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <span class="text-sm text-gray-600">Loading...</span>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useLoaderStore } from '../stores/loader'
const loader = useLoaderStore()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
