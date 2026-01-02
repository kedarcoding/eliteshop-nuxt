<template>
  <section class="w-full py-16 bg-gray-50">
    <h2
      class="text-4xl md:text-5xl font-extrabold text-center mb-12 mt-8 
             bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 
             bg-clip-text text-transparent animate-fadeIn">
      Get in Touch
    </h2>

    <div class="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
      <div
        v-for="(contact, index) in contacts"
        :key="contact.title"
        class="glass-card flex items-center gap-4 animate-popUp"
        :style="{ animationDelay: index * 100 + 'ms' }"
      >
        <div :class="['icon', contact.bg]" :style="{ color: contact.color }">
          <component :is="contact.icon" class="w-8 h-8" />
        </div>

        <div>
          <h5 class="text-lg font-semibold text-gray-900">
            {{ contact.title }}
          </h5>

          <template v-if="contact.link">
            <a :href="contact.link" target="_blank" class="text-blue-600 hover:underline">
              {{ contact.text }}
            </a>
          </template>

          <template v-else>
            <p class="text-gray-700 font-semibold">{{ contact.text }}</p>
          </template>
        </div>
      </div>

      <div v-if="!contacts.length && !loading" class="text-center text-gray-500 col-span-2">
        No contact data found.
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, h } from 'vue'
import { apiService } from '../utils/api'

// SVG icons
const PhoneIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', class: 'w-8 h-8' }, [
  h('path', { d: 'M3 5a2 2 0 012-2h2.5a.5.5 0 01.5.5V6a1 1 0 01-1 1H5v3h2a1 1 0 011 1v2.5a.5.5 0 01-.5.5H5a2 2 0 01-2-2V5z' })
])

const EmailIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', class: 'w-8 h-8' }, [
  h('path', { d: 'M2.003 6.884L12 13l9.997-6.116A2 2 0 0019.001 4H4a2 2 0 00-1.997 2.884z' }),
  h('path', { d: 'M22 8.118l-10 6.116-10-6.116V18a2 2 0 002 2h16a2 2 0 002-2V8.118z' })
])

const LinkedInIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', class: 'w-8 h-8' }, [
  h('path', { d: 'M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.76-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.92-2-2-2s-2 .92-2 2v4.5h-3v-9h3v1.25c.55-.95 2-1 2 0v-1.25h3v9z'})
])

const GitHubIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', class: 'w-8 h-8' }, [
  h('path', { d: 'M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.775.419-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.53 11.53 0 013.003-.403c1.018.004 2.045.137 3.003.403 2.289-1.552 3.294-1.23 3.294-1.23.655 1.653.242 2.874.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.625-5.479 5.921.43.371.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.303 24 12c0-6.628-5.372-12-12-12z' })
])

const TwitterIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', class: 'w-8 h-8' }, [
  h('path', { d: 'M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.555-3.594-1.555-2.717 0-4.924 2.206-4.924 4.924 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.724-.666 1.562-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.175-.069 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634.962-.689 1.8-1.56 2.46-2.548l-.047-.02z' })
])

// 👉 map strings-from-backend → components
const iconMap = {
  PhoneIcon,
  EmailIcon,
  LinkedInIcon,
  GitHubIcon,
  TwitterIcon
}

const contacts = ref([])
const loading = ref(true)

const { data, error } = await useAsyncData('contactData', () =>
  apiService.get('contactData', {}, { useToken: false })
)

if (!error.value && data.value) {
  contacts.value = data.value.map(item => ({
    ...item,
    icon: iconMap[item.icon] || PhoneIcon
  }))
}

loading.value = false
</script>

<style scoped>
.glass-card {
  @apply p-6 rounded-2xl bg-white/50 backdrop-blur-md
         border border-gray-200 shadow-md
         hover:shadow-2xl hover:-translate-y-2 transition-all transform;
}
.icon {
  @apply p-4 rounded-full flex items-center justify-center text-white text-lg shadow-md;
}
@keyframes popUp { 0%{opacity:0;transform:translateY(20px) scale(0.95)} 100%{opacity:1;transform:translateY(0) scale(1)} }
.animate-popUp { animation: popUp 0.6s ease forwards; }
@keyframes fadeIn { 0%{opacity:0;transform:translateY(20px)} 100%{opacity:1;transform:translateY(0)} }
.animate-fadeIn { animation: fadeIn 1s ease forwards; }
</style>
