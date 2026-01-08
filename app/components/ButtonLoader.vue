<template>
  <button
    :disabled="loading || disabled"
    class="relative flex items-center justify-center gap-2
           rounded-xl px-5 py-2 font-medium
           disabled:opacity-60 disabled:cursor-not-allowed
           transition"
    :class="btnClass"
  >
    <!-- spinner -->
    <svg
      v-if="loading"
      class="animate-spin h-4 w-4"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
        fill="none"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>

    <!-- text -->
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup>
defineProps({
  loading: Boolean,
  disabled: Boolean,
  btnClass: {
    type: String,
    default: 'bg-blue-600 text-white hover:bg-blue-700'
  }
})
</script>
