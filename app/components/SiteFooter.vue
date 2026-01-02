<template>
  <footer class="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

      <!-- Brand -->
      <div>
        <h3 class="text-2xl font-bold mb-4">
          <span class="text-yellow-400">elight</span>shop
        </h3>
        <p class="text-gray-400 text-sm">
          Your trusted online shopping platform — quality products, secure
          payments and fast delivery at your doorstep.
        </p>
      </div>

      <!-- Shop -->
      <div>
        <h4 class="text-xl font-semibold mb-4">Shop</h4>
        <ul class="space-y-2 text-gray-400">
          <!-- <li><NuxtLink to="/products" class="hover:text-white transition">All Products</NuxtLink></li> -->
          <li><NuxtLink to="/categories" class="hover:text-white transition">Categories</NuxtLink></li>
          <li><NuxtLink to="/deals" class="hover:text-white transition">Today’s Deals</NuxtLink></li>
          <li><NuxtLink to="/cart" class="hover:text-white transition">My Cart</NuxtLink></li>
        </ul>
      </div>

      <!-- Account & Help -->
      <div>
        <h4 class="text-xl font-semibold mb-4">Help & Support</h4>
        <ul class="space-y-2 text-gray-400">
          <!-- <li><NuxtLink to="/orders" class="hover:text-white transition">My Orders</NuxtLink></li>
          <li><NuxtLink to="/account" class="hover:text-white transition">My Account</NuxtLink></li>
          <li><NuxtLink to="/returns" class="hover:text-white transition">Returns & Refunds</NuxtLink></li>
          <li><NuxtLink to="/shipping" class="hover:text-white transition">Shipping Info</NuxtLink></li>
          <li><NuxtLink to="/support" class="hover:text-white transition">Help Center</NuxtLink></li> -->
        </ul>
      </div>

      <!-- Social -->
      <div>
        <h4 class="text-xl font-semibold mb-4">Follow Us</h4>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-400 hover:text-blue-600 transition text-3xl">
            <IconifyIcon icon="mdi:linkedin" />
          </a>
          <a href="#" class="text-gray-400 hover:text-pink-500 transition text-3xl">
            <IconifyIcon icon="mdi:instagram" />
          </a>
          <a href="#" class="text-gray-400 hover:text-blue-400 transition text-3xl">
            <IconifyIcon icon="mdi:twitter" />
          </a>
          <a href="#" class="text-gray-400 hover:text-blue-700 transition text-3xl">
            <IconifyIcon icon="mdi:facebook" />
          </a>
        </div>
      </div>

    </div>

    <!-- Bottom -->
    <div class="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
      © {{ new Date().getFullYear() }} elightshop. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import { Icon as IconifyIcon } from '@iconify/vue'
</script>
