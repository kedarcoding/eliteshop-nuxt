<script setup>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

// helper functions
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isMobile = (v) => /^[0-9]{10}$/.test(v);
const isUsername = (v) => /^[a-zA-Z0-9_.-]{3,}$/.test(v);

const schema = yup.object({
  identifier: yup
    .string()
    .required("Enter email, mobile or username")
    .test("valid-identifier", "Invalid email / mobile / username", (value) => {
      return isEmail(value) || isMobile(value) || isUsername(value);
    }),

  password: yup.string().min(6).required("Password required"),
});

const { handleSubmit, errors } = useForm({ validationSchema: schema });

const { value: identifier } = useField("identifier");
const { value: password } = useField("password");

const onSubmit = handleSubmit((values) => {
  console.log("LOGIN:", values);
  // API → { identifier, password }
});
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

      <button class="btn-primary w-full">Login</button>
    </form>
    <div class="text-center mt-4 text-sm">
  <span class="text-gray-400">Don't have an account?</span>
  <NuxtLink
    to="/register"
    class="text-yellow-400 font-semibold hover:underline"
  >
    Create account
  </NuxtLink>
</div>

  </section>
</template>

<style scoped>
.input{ @apply w-full border rounded-lg px-3 py-2; }
.error{ @apply text-sm text-red-500 mt-1; }
.btn-primary{ @apply bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700; }
</style>
