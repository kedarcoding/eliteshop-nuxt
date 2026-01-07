<template>
  <div class="min-h-screen flex flex-col">
    <!-- Sticky Header -->
    <HeaderNav class="sticky top-0 z-50 shadow" />

    <!-- Scrollable main content -->
    <main class="flex-1 overflow-y-auto overflow-x-hidden container mx-auto p-6 mt-4 mb-4">
      <div>
       <slot />
      </div>
    </main>

    <!-- Sticky Footer -->
    <SiteFooter class="shadow" />
  </div>
</template>

<script setup>
import HeaderNav from '~/components/HeaderNav.vue'
import SiteFooter from '~/components/SiteFooter.vue'
</script>
