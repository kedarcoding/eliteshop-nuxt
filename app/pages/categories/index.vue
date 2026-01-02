<template>
  <section class="container mx-auto px-6 py-10">
    <h2 class="text-3xl font-bold mb-6">Shop by Categories</h2>

    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      <NuxtLink
        v-for="c in categories"
        :key="c.slug"
        :to="`/categories/${c.slug}`"
        class="bg-white rounded-2xl p-6 shadow hover:shadow-lg hover:-translate-y-1 transition"
      >
        <img :src="c.image" class="rounded-xl h-28 w-full object-cover mb-4" />
        <h3 class="font-bold text-lg">{{ c.name }}</h3>
        <p class="text-gray-500 text-sm mt-1">{{ c.items }} items</p>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    name: 'Mobiles',
    slug: 'mobiles',
    items: 24,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
  },
  {
    name: 'Laptops',
    slug: 'laptops',
    items: 15,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8'
  },
  {
    name: 'Fashion',
    slug: 'fashion',
    items: 40,
    image: 'https://images.unsplash.com/photo-1528701800489-20be0c4a9a43'
  },
  {
    name: 'Gadgets',
    slug: 'gadgets',
    items: 18,
    image: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f'
  }
]
</script>
