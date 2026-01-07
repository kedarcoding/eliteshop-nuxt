<template>
  <div class="bg-white rounded-2xl shadow hover:shadow-lg transition p-4">
    <NuxtLink :to="`/product/${product.id}`">
      <img
        :src="product.image || '/images/placeholder.png'"
        class="rounded-xl h-40 w-full object-cover"
      />

      <h3 class="mt-3 font-bold text-lg">
        {{ product.name }}
      </h3>

      <p class="text-gray-500 text-sm">
        {{ product.category?.name }}
      </p>

      <div class="flex justify-between items-center mt-3">
        <div class="flex items-center gap-2">
          <span class="font-extrabold text-blue-700">
            ₹{{ product.sell_price }}
          </span>

          <span
            v-if="Number(product.original_price) > Number(product.sell_price)"
            class="text-gray-400 line-through text-sm"
          >
            ₹{{ product.original_price }}
          </span>
        </div>

        <span class="px-3 py-1 rounded-full bg-blue-700 text-white text-sm">
          View
        </span>
      </div>

      <span
        v-if="product.is_top"
        class="mt-2 inline-block text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full"
      >
        ⭐ Top Product
      </span>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  product: Object
})
</script>
