<template>
  <div>

    <!-- HERO BANNER -->
    <section class="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
      <div class="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
            Shop Smart. Live Better.
          </h1>
          <p class="mt-4 text-lg text-blue-100">
            Trending deals, premium quality & fast delivery — everything in one place.
          </p>

          <button class="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full hover:bg-yellow-300">
            Start Shopping
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          class="rounded-2xl shadow-2xl"
        />
      </div>
    </section>

    <!-- CATEGORIES -->
    <section class="container mx-auto px-6 py-10">
      <h2 class="text-2xl font-bold mb-4">Browse Categories</h2>

      <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
        <div
          v-for="cat in categories"
          :key="cat"
          class="bg-gray-100 hover:bg-gray-200 cursor-pointer text-center py-3 rounded-xl font-semibold"
        >
          {{ cat }}
        </div>
      </div>
    </section>

    <!-- TOP PRODUCTS -->
    <section class="container mx-auto px-6 py-10">
      <h2 class="text-2xl font-bold mb-6">Top Products</h2>

      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="product in topProducts"
          :key="product.id"
          class="bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
        >
          <img :src="product.image" class="rounded-xl h-40 w-full object-cover" />

          <h3 class="mt-3 font-bold text-lg">{{ product.name }}</h3>
          <p class="text-gray-500 text-sm">{{ product.category }}</p>

          <div class="flex justify-between items-center mt-3">
            <span class="font-extrabold text-blue-700">₹{{ product.price }}</span>
            <button class="px-3 py-1 rounded-full bg-blue-700 text-white hover:bg-blue-600">
              Add
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ANALYTICS CARDS -->
    <section class="bg-gray-50 py-12">
      <div class="container mx-auto px-6 grid md:grid-cols-4 gap-6">

        <div class="p-6 bg-white rounded-2xl shadow text-center">
          <h3 class="text-3xl font-extrabold">{{ stats.customers }}</h3>
          <p class="text-gray-500 mt-1">Happy Customers</p>
        </div>

        <div class="p-6 bg-white rounded-2xl shadow text-center">
          <h3 class="text-3xl font-extrabold">{{ stats.sold }}</h3>
          <p class="text-gray-500 mt-1">Items Sold</p>
        </div>

        <div class="p-6 bg-white rounded-2xl shadow text-center">
          <h3 class="text-3xl font-extrabold">{{ stats.topSelling }}</h3>
          <p class="text-gray-500 mt-1">Top Selling Products</p>
        </div>

        <div class="p-6 bg-white rounded-2xl shadow text-center">
          <h3 class="text-3xl font-extrabold">{{ stats.reviews }}</h3>
          <p class="text-gray-500 mt-1">5⭐ Reviews</p>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const categories = [
  'Mobiles',
  'Laptops',
  'Fashion',
  'Home',
  'Beauty',
  'Grocery'
]

const products = [
  { id: 1, name: 'iPhone 15', price: 78000, category: 'Mobiles', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9' },
  { id: 2, name: 'MacBook Air', price: 99999, category: 'Laptops', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' },
  { id: 3, name: 'Nike Shoes', price: 4999, category: 'Fashion', image: 'https://images.unsplash.com/photo-1528701800489-20be0c4a9a43' },
  { id: 4, name: 'Smart Watch', price: 3999, category: 'Gadgets', image: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f' },
  { id: 5, name: 'LED TV 43"', price: 28999, category: 'Home', image: 'https://images.unsplash.com/photo-1593357849628-884682285bea' },
  { id: 6, name: 'Blender', price: 1999, category: 'Kitchen', image: 'https://images.unsplash.com/photo-1601050690597-dfcbf2e3d6e4' },
  { id: 7, name: 'Perfume', price: 1499, category: 'Beauty', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f' },
  { id: 8, name: 'Headphones', price: 2499, category: 'Gadgets', image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167' },
  { id: 9, name: 'Gaming Keyboard', price: 2999, category: 'Electronics', image: 'https://images.unsplash.com/photo-1587202372775-98927b1b9a0f' }
]

// show only 8
const topProducts = computed(() => products.slice(0, 8))

const stats = {
  customers: '25K+',
  sold: '120K+',
  topSelling: '150+',
  reviews: '18K+'
}
</script>
