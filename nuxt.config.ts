export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_BASE_URL: 'http://localhost:8000/api'
      // production me: https://api.yoursite.com/api
    }
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },

  css: ['../assets/css/main.css'],

  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: true,
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
})
