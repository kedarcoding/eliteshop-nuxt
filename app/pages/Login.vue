<script setup>
import { useForm, useField } from "vee-validate"
import * as yup from "yup"
import { useAuthStore } from "../stores/auth"
import { useRouter } from "vue-router"

const router = useRouter()
const auth = useAuthStore()

// validation schema
const schema = yup.object({
  identifier: yup.string().required("Enter email / mobile / username"),
  password: yup.string().min(6).required("Password required"),
})

const { handleSubmit, errors, isSubmitting } = useForm({ validationSchema: schema })
const { value: identifier } = useField("identifier")
const { value: password } = useField("password")

// submit
const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true

  try {
    // 🔐 Login request → backend sets httpOnly cookie automatically
    const res = await $fetch("/api/login", {
      method: "POST",
      body: values,
      credentials: "include" // <- important for cookies
    })

    if (res?.status !== "success") {
      throw new Error(res?.message || "Invalid credentials")
    }

    // 🔁 Set user in auth store → memory + localStorage
    auth.setUser(res.user)

    router.push("/shop")
  } catch (e) {
    alert(e.message || "Login failed")
  } finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <section class="max-w-md mx-auto p-6 bg-white rounded-2xl shadow">
    <h2 class="text-2xl font-bold text-center mb-4">Login</h2>

    <form @submit.prevent="onSubmit" class="space-y-4">
      <div>
        <label>Email / Mobile / Username</label>
        <input v-model="identifier" class="input" />
        <p class="error" v-if="errors.identifier">{{ errors.identifier }}</p>
      </div>

      <div>
        <label>Password</label>
        <input v-model="password" type="password" class="input" />
        <p class="error" v-if="errors.password">{{ errors.password }}</p>
      </div>

      <button class="btn-primary w-full" :disabled="isSubmitting">
        {{ isSubmitting ? "Logging in..." : "Login" }}
      </button>
    </form>

    <div class="text-center mt-4 text-sm">
      <span class="text-gray-400">Don’t have an account?</span>
      <NuxtLink to="/register" class="text-yellow-500 font-semibold hover:underline">
        Create account
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.input { @apply w-full border rounded-lg px-3 py-2; }
.error { @apply text-sm text-red-500 mt-1; }
.btn-primary { @apply bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-60; }
</style>
