<template>
  <div class="bg-white rounded-2xl shadow hover:shadow-lg transition p-4">
    <NuxtLink :to="`/product/${product.id}`">
      <img :src="product.image" class="rounded-xl h-40 w-full object-cover" />
      <h3 class="mt-3 font-bold text-lg">{{ product.name }}</h3>
      <p class="text-gray-500 text-sm">{{ product.category }}</p>

      <div class="flex justify-between items-center mt-3">
        <span class="font-extrabold text-blue-700">₹{{ product.price }}</span>
        <span class="px-3 py-1 rounded-full bg-blue-700 text-white text-sm">
          View
        </span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  product: Object
})
</script>
