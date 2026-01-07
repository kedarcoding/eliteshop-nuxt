<script setup>
import { useForm, useField } from "vee-validate"
import * as yup from "yup"
import { useAuthStore } from "../stores/auth"
import { useRouter } from "vue-router"

const auth = useAuthStore()
const router = useRouter()

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
const isMobile = (v) => /^[0-9]{10}$/.test(v)

// -------- VALIDATION ----------
const schema = yup
  .object({
    name: yup.string().required("Name required"),

    email: yup
      .string()
      .transform(v => (v === "" ? undefined : v))
      .notRequired()
      .test("email-format", "Invalid email", v => !v || isEmail(v)),

    mobile: yup
      .string()
      .transform(v => (v === "" ? undefined : v))
      .notRequired()
      .test("mobile-format", "Invalid mobile", v => !v || isMobile(v)),

    username: yup
      .string()
      .min(3, "Min 3 characters")
      .required("Username required"),

    password: yup
      .string()
      .min(6, "Password must be 6+ chars")
      .required("Password required"),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords do not match")
      .required("Confirm password required"),
  })
  .test(
    "email-or-mobile",
    "Provide email or mobile",
    (values) => !!(values.email || values.mobile)
  )

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
})

const { value: name } = useField("name")
const { value: email } = useField("email")
const { value: mobile } = useField("mobile")
const { value: username } = useField("username")
const { value: password } = useField("password")
const { value: confirmPassword } = useField("confirmPassword")

// -------- SUBMIT ------------
const onSubmit = handleSubmit(async (values) => {
  const payload = {
    name: values.name,
    email: values.email,
    mobile: values.mobile,
    username: values.username,
    password: values.password,
    password_confirmation: values.confirmPassword,
  }

  const res = await auth.register(payload)

  if (res.success) {
    router.push("/shop") // or /login if you prefer
  } else {
    alert(res.message)
  }
})
</script>

<template>
  <section class="max-w-md mx-auto p-6 bg-white rounded-2xl shadow">
    <h2 class="text-2xl font-bold text-center mb-2">Create Account</h2>
    <p class="text-center text-gray-500 mb-6">
      Sign up using email OR mobile number
    </p>

    <form @submit.prevent="onSubmit" class="space-y-4">
      <div>
        <label>Name *</label>
        <input v-model="name" class="input" />
        <p v-if="errors.name" class="error">{{ errors.name }}</p>
      </div>

      <div>
        <label>Email (optional)</label>
        <input v-model="email" type="email" class="input" />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>

      <div>
        <label>Mobile (optional)</label>
        <input v-model="mobile" class="input" />
        <p v-if="errors.mobile" class="error">{{ errors.mobile }}</p>
      </div>

      <div>
        <label>Username *</label>
        <input v-model="username" class="input" />
        <p v-if="errors.username" class="error">{{ errors.username }}</p>
      </div>

      <div>
        <label>Password *</label>
        <input v-model="password" type="password" class="input" />
        <p v-if="errors.password" class="error">{{ errors.password }}</p>
      </div>

      <div>
        <label>Confirm Password *</label>
        <input v-model="confirmPassword" type="password" class="input" />
        <p v-if="errors.confirmPassword" class="error">
          {{ errors.confirmPassword }}
        </p>
      </div>

      <button class="btn-primary w-full" :disabled="isSubmitting">
        {{ isSubmitting ? "Creating..." : "Register" }}
      </button>

      <div class="text-center mt-4 text-sm">
        Already have an account?
        <NuxtLink to="/login" class="text-blue-600 font-semibold hover:underline">
          Login
        </NuxtLink>
      </div>
    </form>
  </section>
</template>

<style scoped>
.input { @apply w-full border rounded-lg px-3 py-2 outline-none focus:ring focus:ring-blue-200; }
.error { @apply text-sm text-red-500 mt-1; }
.btn-primary { @apply bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-60; }
</style>
