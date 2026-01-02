<template>
  <section class="container mx-auto px-6 py-10">
    <h2 class="text-2xl font-bold mb-4">Today’s Deals</h2>
    <p class="text-gray-500 mb-6">Exclusive discounts — limited time.</p>

    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      <ProductCard v-for="p in deals" :key="p.id" :product="p" />
    </div>
  </section>
</template>

<script setup>
import ProductCard from '~/components/ProductCard.vue'

const deals = [
  { id: 3, name: 'Nike Shoes', price: 3499, category: 'Fashion', image: 'https://images.unsplash.com/photo-1528701800489-20be0c4a9a43' }
]
</script>
