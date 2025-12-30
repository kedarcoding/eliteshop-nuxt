<template>
  <section class="max-w-7xl mx-auto px-6 py-16">
    <h2 class="text-3xl font-bold mb-10 text-center">Job Opportunities</h2>

    <!-- Job Cards -->
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="job in jobs"
        :key="job.id"
        class="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-1 transition"
      >
        <h3 class="text-xl font-semibold mb-2">{{ job.title }}</h3>
        <p class="text-gray-600 text-sm mb-4">{{ job.description }}</p>

        <div class="mb-2">
          <span class="font-medium">Skills:</span>
          <p class="text-gray-700 text-sm">{{ job.skills }}</p>
        </div>

        <div class="mb-2">
          <span class="font-medium">Experience:</span>
          <p class="text-gray-700 text-sm">{{ job.experience }}</p>
        </div>

        <div class="mb-2">
          <span class="font-medium">Benefits:</span>
          <p class="text-gray-700 text-sm">{{ job.benefits }}</p>
        </div>

        <div v-if="job.compensation" class="mb-2">
          <span class="font-medium">Compensation:</span>
          <p class="text-gray-700 text-sm">{{ job.compensation }}</p>
        </div>

        <p class="text-gray-500 text-xs mb-4">
          Posted: {{ job.posted }}
        </p>

        <button
          class="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition"
          @click="openForm(job)"
        >
          Apply Now
        </button>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="showForm"
      class="fixed inset-0 bg-black/60 flex items-center justify-center z-40"
    >
      <div class="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-8 relative">
        <button
          class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          @click="showForm = false"
        >
          ✕
        </button>

        <h3 class="text-2xl font-bold mb-2">
          Apply — {{ selectedJob?.title }}
        </h3>
        <p class="text-gray-500 mb-6 text-sm">
          Fill the form and we’ll reach out to you soon.
        </p>

        <form @submit.prevent="submitForm" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input v-model="form.firstName" placeholder="First Name" class="input" />
            <input v-model="form.lastName" placeholder="Last Name" class="input" />
          </div>

          <select v-model="form.experience" class="input">
            <option value="">Experience (0–9 years)</option>
            <option v-for="n in 10" :key="n" :value="n-1">{{ n-1 }} Years</option>
          </select>

          <input v-model="form.email" placeholder="Email" type="email" class="input" />
          <input v-model="form.phone" placeholder="Phone" class="input" />

          <textarea
            v-model="form.message"
            placeholder="Message"
            rows="3"
            class="input"
          ></textarea>

          <input
            type="file"
            @change="handleFile"
            class="input file:border-0 file:bg-gray-100"
          />

          <button
            class="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const jobs = ref([
  {
    id: 1,
    title: 'Frontend Developer (Vue/Nuxt)',
    description: 'Build modern UI and reusable components.',
    skills: 'Vue, Nuxt, Tailwind, REST APIs',
    experience: '1–3 years',
    benefits: 'Remote, flexible timing, performance bonus',
    compensation: '₹4–7 LPA',
    posted: 'Dec 25, 2025'
  },
  {
    id: 2,
    title: 'Backend Developer (Laravel/PHP)',
    description: 'Develop scalable APIs & backend systems.',
    skills: 'Laravel, MySQL, Redis, Queues',
    experience: '2–4 years',
    benefits: 'Paid leave, yearly bonus',
    compensation: '₹5–9 LPA',
    posted: 'Dec 24, 2025'
  },
  {
    id: 3,
    title: 'Full-Stack Developer',
    description: 'Work across frontend + backend modules.',
    skills: 'Vue, Node/Laravel, SQL',
    experience: '2–5 years',
    benefits: 'Hybrid work, health insurance',
    compensation: '₹7–12 LPA',
    posted: 'Dec 23, 2025'
  },
  {
    id: 4,
    title: 'Mobile App Developer',
    description: 'Build cross-platform apps.',
    skills: 'Flutter / React Native',
    experience: '1–3 years',
    benefits: 'Learning allowance',
    compensation: '₹4–8 LPA',
    posted: 'Dec 22, 2025'
  },
  {
    id: 5,
    title: 'UI/UX Designer',
    description: 'Design clean, modern user interfaces.',
    skills: 'Figma, Wireframes, Prototyping',
    experience: '0–2 years',
    benefits: 'Mentorship, remote friendly',
    posted: 'Dec 22, 2025'
  },
  {
    id: 6,
    title: 'QA Engineer',
    description: 'Test apps and automate flows.',
    skills: 'Manual, Selenium, API testing',
    experience: '1–3 years',
    benefits: 'Flexible hours',
    posted: 'Dec 21, 2025'
  },
  {
    id: 7,
    title: 'Project Manager',
    description: 'Handle sprint planning & client communication.',
    skills: 'Agile, Jira, Communication',
    experience: '3–6 years',
    compensation: '₹10–16 LPA',
    posted: 'Dec 20, 2025'
  },
  {
    id: 8,
    title: 'DevOps Engineer',
    description: 'CI/CD, deployments & monitoring.',
    skills: 'Docker, AWS, GitHub Actions',
    experience: '2–5 years',
    posted: 'Dec 20, 2025'
  },
  {
    id: 9,
    title: 'Support Engineer',
    description: 'Handle tickets & customer issues.',
    skills: 'Troubleshooting, docs',
    experience: '0–2 years',
    posted: 'Dec 19, 2025'
  },
  {
    id: 10,
    title: 'Business Analyst',
    description: 'Understand client needs & write specs.',
    skills: 'Docs, diagrams, communication',
    experience: '2–4 years',
    posted: 'Dec 18, 2025'
  }
])

const showForm = ref(false)
const selectedJob = ref(null)

const form = ref({
  firstName: '',
  lastName: '',
  experience: '',
  email: '',
  phone: '',
  message: '',
  cv: null
})

function openForm(job) {
  selectedJob.value = job
  showForm.value = true
}

function handleFile(e) {
  form.value.cv = e.target.files[0]
}

function submitForm() {
  console.log('Application submitted:', { job: selectedJob.value, ...form.value })
  alert('Application submitted! (demo)')
  showForm.value = false
}
</script>

<style scoped>
.input {
  @apply w-full border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300;
}
</style>
