<template>
  <section class="max-w-7xl mx-auto px-6 py-16">
    <h2 class="text-3xl font-bold text-center mb-10">
      Our Courses
    </h2>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="course in courses"
        :key="course.id"
        class="bg-white rounded-2xl shadow-xl p-6 border hover:-translate-y-1 hover:shadow-2xl transition"
      >
        <h3 class="text-xl font-semibold mb-2">
          {{ course.title }}
        </h3>

        <p class="text-gray-600 text-sm mb-4">
          {{ course.description }}
        </p>

        <div class="space-y-2 text-sm mb-4">
          <p>
            <span class="font-medium">Duration:</span>
            {{ course.duration }}
          </p>
          <p>
            <span class="font-medium">Learning Type:</span>
            {{ course.type }}
          </p>
        </div>

        <button
          class="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition"
          @click="viewCourse(course)"
        >
          Learn More
        </button>
      </div>
    </div>

    <!-- simple modal preview -->
    <div
      v-if="selected"
      class="fixed inset-0 bg-black/60 flex items-center justify-center z-40"
    >
      <div class="bg-white rounded-2xl p-8 max-w-lg w-full relative">
        <button
          class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          @click="selected = null"
        >
          ✕
        </button>

        <h3 class="text-2xl font-bold mb-2">
          {{ selected.title }}
        </h3>

        <p class="text-gray-600 mb-4">
          {{ selected.description }}
        </p>

        <ul class="text-sm space-y-1 mb-6">
          <li><strong>Duration:</strong> {{ selected.duration }}</li>
          <li><strong>Learning Type:</strong> {{ selected.type }}</li>
        </ul>

        <button
          class="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
          @click="selected = null"
        >
          Okay
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const courses = ref([
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    duration: '6 weeks',
    type: 'Live meetings + practice',
    description: 'Core concepts, DOM, async, real-world mini projects.'
  },
  {
    id: 2,
    title: 'PHP & Backend Basics',
    duration: '8 weeks',
    type: 'Hybrid (videos + meetings)',
    description: 'APIs, forms, database, authentication, best practices.'
  },
  {
    id: 3,
    title: 'Full-Stack Development',
    duration: '12 weeks',
    type: 'Mentorship + project based',
    description: 'Frontend + backend + deployment — build full apps.'
  },
  {
    id: 4,
    title: 'Vue.js & Nuxt',
    duration: '7 weeks',
    type: 'Live coding sessions',
    description: 'Components, routing, state, SEO, real app workflow.'
  },
  {
    id: 5,
    title: 'SPA & SaaS App Development',
    duration: '10 weeks',
    type: 'Project driven',
    description: 'Scalable SPA structure, auth, billing concept, APIs.'
  }
])

const selected = ref(null)

function viewCourse(course) {
  selected.value = course
}
</script>
