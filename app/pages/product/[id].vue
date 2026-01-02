<template>
  <section class="container mx-auto px-6 py-10" v-if="product">
    <div class="grid md:grid-cols-2 gap-10">
      <img :src="product.image" class="rounded-2xl shadow-xl" />

      <div>
        <h1 class="text-3xl font-bold">{{ product.name }}</h1>
        <p class="mt-2 text-gray-500">{{ product.category }}</p>

        <p class="mt-4 text-lg">
          {{ product.description }}
        </p>

        <h2 class="mt-6 text-3xl font-extrabold text-blue-700">
          ₹{{ product.price }}
        </h2>

        <button class="mt-6 px-6 py-3 bg-blue-700 text-white rounded-full">
          Add to Cart
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute()

const products = [
  { id: 1, name: 'iPhone 15', price: 78000, category: 'Mobiles', description: 'Premium smartphone', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9' },
  { id: 2, name: 'MacBook Air', price: 99999, category: 'Laptops', description: 'Lightweight performance laptop', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' }
]

const product = products.find(p => p.id === Number(route.params.id))
</script>
