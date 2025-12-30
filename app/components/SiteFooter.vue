<template>
  <footer class="bg-slate-700 text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      
      <!-- Company Info -->
      <div>
        <h3 class="text-2xl font-bold mb-4"><span class="text-yellow-400">Ked</span>Craft</h3>
        <p class="text-gray-400 text-sm">
          Providing modern web & mobile app solutions, SaaS platforms, and custom API integrations. 
          Helping businesses grow fast, smooth, and scalable.
        </p>
      </div>

      <!-- Services -->
      <div>
        <h4 class="text-xl font-semibold mb-4">Services</h4>
        <ul class="space-y-2 text-gray-400">
          <li><NuxtLink to="/" class="hover:text-white transition">Web Development</NuxtLink></li>
          <li><NuxtLink to="/" class="hover:text-white transition">SaaS & SPA Apps</NuxtLink></li>
          <li><NuxtLink to="/" class="hover:text-white transition">API Integration</NuxtLink></li>
          <li><NuxtLink to="/" class="hover:text-white transition">E-commerce Solutions</NuxtLink></li>
        </ul>
      </div>

      <!-- About & Contact -->
      <div>
        <h4 class="text-xl font-semibold mb-4">About & Contact</h4>
        <ul class="space-y-2 text-gray-400 mb-4">
          <li><NuxtLink to="/about" class="hover:text-white transition">About Us</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-white transition">Contact Us</NuxtLink></li>
          <li><NuxtLink to="/privacypolicy" class="hover:text-white transition">Privacy Policy</NuxtLink></li>
          <li><NuxtLink to="/terms" class="hover:text-white transition">Terms & Conditions</NuxtLink></li>
        </ul>
      </div>

      <!-- Social Links -->
      <div>
        <h4 class="text-xl font-semibold mb-4">Follow Us</h4>
        <div class="flex space-x-6">
          <a href="https://www.linkedin.com/in/kedar-golande-411b9b167" target="_blank" class="text-gray-400 hover:text-blue-600 transition text-3xl">
            <IconifyIcon icon="mdi:linkedin" />
          </a>
          <a href="#" target="_blank" class="text-gray-400 hover:text-pink-500 transition text-3xl">
            <IconifyIcon icon="mdi:instagram" />
          </a>
          <a href="#" target="_blank" class="text-gray-400 hover:text-blue-400 transition text-3xl">
            <IconifyIcon icon="mdi:twitter" />
          </a>
          <a href="#" target="_blank" class="text-gray-400 hover:text-blue-700 transition text-3xl">
            <IconifyIcon icon="mdi:facebook" />
          </a>
        </div>
      </div>

    </div>

    <!-- Bottom Copyright -->
    <div class="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
      © {{ new Date().getFullYear() }} Kedar Golande. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import { Icon as IconifyIcon } from '@iconify/vue';
</script>
