<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 text-center">

      <h2 class="text-4xl font-extrabold text-gray-900 mb-3">
        Our Services
      </h2>

      <p class="text-gray-600 mb-12 max-w-2xl mx-auto">
        Reliable, scalable and modern digital solutions for your business.
      </p>

      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
        >
          <div class="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
            <span v-html="service.icon" class="w-7 h-7"></span>
          </div>

          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            {{ service.title }}
          </h3>

          <p class="text-gray-600 mb-4">
            {{ service.description }}
          </p>

          <button class="text-indigo-600 font-medium hover:underline">
            Learn more →
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Page Meta for SEO
import { useHead } from '#imports'

useHead({
  title: 'Services | KedCraft',
  meta: [
    { name: 'description', content: 'Web Development, App Development, SaaS, Digital Marketing, API Integration, Business Apps, Scalable Solutions, Project Upgrading' },
    { property: 'og:title', content: 'Services | KedCraft - Modern Web & App Solutions' },
    { property: 'og:description', content: 'Explore KedCraft services: Web Development, App Development, SaaS Platforms, API Integrations, Digital Marketing, and Support for scalable business growth.'},
    {
      name: 'author',
      content: 'Kedar Golande'
    }
  ]
})

const services = [
  {
    title: 'Web Development',
    description: 'High-performance, SEO-friendly and scalable websites.',
    icon: `
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 4h18v14H3z"/><path d="M2 18h20v2H2z"/>
      </svg>
    `
  },
  {
    title: 'App Development',
    description: 'Business-focused applications with clean UI & UX.',
    icon: `
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z"/>
      </svg>
    `
  },
  {
    title: 'Digital Marketing',
    description: 'Grow traffic, conversions and brand visibility.',
    icon: `
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 4h2v16H4zM8 8h2v12H8zM12 12h2v8h-2zM16 6h2v14h-2z"/>
      </svg>
    `
  },
  {
    title: 'SaaS / Product Development',
    description: 'Subscription platforms built to scale reliably.',
    icon: `
      <svg fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
      </svg>
    `
  },
  {
    title: 'API & Integrations',
    description: 'Secure REST APIs, webhooks & third-party tools.',
    icon: `
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 12l-4 4 4 4M17 4l4 4-4 4M3 16h10M11 8h10"/>
      </svg>
    `
  },
  {
    title: 'Maintenance & Support',
    description: 'Performance, security and long-term support.',
    icon: `
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-8.5L1 8h7z"/>
      </svg>
    `
  }
]
</script>
