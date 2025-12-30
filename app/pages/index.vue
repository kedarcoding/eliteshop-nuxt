<template>
  <!-- Professional Services Section -->
  <section class="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 py-20 px-6">
    <h2 class="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-900 animate-fadeIn">Professional Web App Services</h2>
    <p class="text-gray-700 text-center max-w-4xl mx-auto mb-16 text-lg md:text-2xl animate-fadeIn delay-200">
      We provide end-to-end web application solutions to help your business grow smoothly and efficiently. 
      From SEO-based SPA & SaaS apps to custom API integrations, we ensure your online platform is fast, scalable, and modern.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      <div 
        v-for="(service, index) in services" 
        :key="service.title"
        class="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 text-center animate-popUp"
        :style="{animationDelay: index * 100 + 'ms'}"
      >
        <div class="text-5xl mb-5">{{ service.icon }}</div>
        <h3 class="text-2xl font-bold mb-3 text-gray-900">{{ service.title }}</h3>
        <p class="text-gray-600 text-md">{{ service.description }}</p>
      </div>
    </div>
  </section>


   <section class="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-20">
    <div class="mx-auto text-center px-4">
      <!-- Heading -->
      <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
        Explore the Magic of Innovation
      </h2>

      <!-- Subheading -->
      <p class="text-lg md:text-xl text-white/90 mb-12">
        Transforming ideas into reality with creativity, technology, and passion.
      </p>

      <!-- CTA Button -->
      <NuxtLink
        to="/services"
        class="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300"
      >
        Discover More
      </NuxtLink>
    </div>

    <!-- Decorative Circles -->
    <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute -top-16 -right-16 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
  </section>

  <!-- Sample App Solutions Section -->
  <section class="bg-gray-50 py-20 px-6">
    <h2 class="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-900 animate-fadeIn">Sample Web & Mobile Apps</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
      <div 
        v-for="(app, index) in sampleApps" 
        :key="app.title"
        class="bg-gradient-to-r from-white via-gray-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 text-center animate-popUp"
        :style="{animationDelay: index * 100 + 'ms'}"
      >
        <div class="text-5xl mb-5">{{ app.icon }}</div>
        <h3 class="text-2xl font-bold mb-3 text-gray-900">{{ app.title }}</h3>
        <p class="text-gray-600 text-md">{{ app.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { title: 'Fast & Scalable Apps', description: 'High-performance web apps that grow with your business.', icon: '🚀' },
  { title: 'SEO Optimized', description: 'Web apps built with SEO best practices for higher visibility.', icon: '⚡' },
  { title: 'SaaS & SPA Solutions', description: 'Multi-tenant SaaS and single-page apps for modern businesses.', icon: '💼' },
  { title: 'Custom Solutions', description: 'Tailored apps like booking, inventory, franchise, coaching & rental services.', icon: '🔧' },
];

const sampleApps = [
  { title: 'Hotel Booking App', description: 'Book rooms, manage bookings & integrate payment gateways seamlessly.', icon: '🏨' },
  { title: 'Tourism App', description: 'Travel packages, itineraries, bookings & live updates for tourists.', icon: '✈️' },
  { title: 'Item Repairing App', description: 'Service requests, tracking & scheduling for repair services.', icon: '🛠️' },
  { title: 'Inventory Management App', description: 'Manage stock, orders & suppliers efficiently with real-time updates.', icon: '📦' },
  { title: 'Product Selling App', description: 'E-commerce app with shopping cart, payment & order tracking features.', icon: '🛍️' },
  { title: 'Coaching App', description: 'Online courses, classes scheduling & progress tracking for students.', icon: '📚' },
];

// SEO Meta for the page
useSeoMeta({
  title: 'Professional Web App Development | SEO, SaaS & Fast Apps',
  description:
    'We build fast, SEO-friendly web apps, SPA & SaaS solutions with modern UI, performance, and scalability.',
  ogTitle: 'Professional Web App Development',
  ogDescription:
    'Grow your business with SEO-optimized, scalable web applications.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

// Structured data for organization with tech stacks
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'KedCraft',
        url: 'https://yourdomain.com',
        sameAs: [
          'https://facebook.com/yourpage',
          'https://instagram.com/yourprofile',
          'https://linkedin.com/in/yourprofile',
          'https://twitter.com/yourprofile'
        ],
        logo: 'https://yourdomain.com/logo.png',
        description: 'Providing modern web & mobile app solutions, SaaS platforms, and custom API integrations.',
        makesOffer: {
          '@type': 'Offer',
          category: 'Web Application Development',
        },
        technology: [
          'PHP',
          'Laravel',
          'Vue.js',
          'Nuxt.js',
          'JavaScript',
          'MySQL',
          'Redis',
          'TailwindCSS'
        ]
      }),
    },
  ],
})

</script>


<style scoped>
/* Simple animation using Tailwind + custom keyframes */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 1s ease forwards;
}

@keyframes popUp {
  0% { opacity: 0; transform: translateY(30px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
.animate-popUp {
  animation: popUp 0.6s ease forwards;
}
</style>
