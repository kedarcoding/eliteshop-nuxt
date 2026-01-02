<template>
  <section class="container mx-auto px-6 py-10">
    <h2 class="text-2xl font-bold mb-6">Category: {{ slug }}</h2>

    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      <ProductCard v-for="p in filtered" :key="p.id" :product="p" />
    </div>
  </section>
</template>

<script setup>
import ProductCard from '~/components/ProductCard.vue'
const route = useRoute()
const slug = route.params.slug

const products = [
  { id: 1, name: 'iPhone 15', price: 78000, category: 'Mobiles', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9' },
  { id: 2, name: 'MacBook Air', price: 99999, category: 'Laptops', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' }
]

const filtered = products.filter(p => p.category.toLowerCase() === slug)
</script>
