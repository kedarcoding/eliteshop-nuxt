<template>
  <div class="bg-gray-50 min-h-screen px-6 py-20">
    
    <!-- Hero / Intro -->
    <section class="text-center max-w-4xl mx-auto mb-20">
      <h1 class="text-5xl md:text-6xl font-bold mb-6 text-gray-900 animate-fadeIn">About Me</h1>
      <p class="text-lg md:text-xl text-gray-700 animate-fadeIn delay-200">
        I am Kedar Golande, a Full-Stack Developer specializing in modern web and mobile applications. 
        My goal is to create smooth, fast, and scalable solutions that bring satisfaction and happiness to clients worldwide.
      </p>
    </section>

    <!-- Experience & International Clients -->
    <section class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
      <div class="animate-popUp">
        <img src="https://picsum.photos/600/400?random=10" alt="International Projects" class="rounded-3xl shadow-lg" />
      </div>
      <div class="animate-popUp delay-200">
        <h2 class="text-4xl font-bold mb-6 text-gray-900">International Experience</h2>
        <p class="text-gray-700 mb-4 text-lg">
          I have successfully collaborated with clients from <strong>UAE, USA, and Japan</strong>, delivering robust business apps and customized features.
        </p>
        <p class="text-gray-700 text-lg">
          Working with international clients taught me how to understand business needs, provide fast and reliable web solutions, and ensure client satisfaction every time.
        </p>
      </div>
    </section>

   <!-- Stylish Approach & Philosophy -->
<section class="relative py-20 px-6 max-w-6xl mx-auto mb-20">
  <!-- Background Gradient with Shape -->
  <div class="absolute inset-0 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-3xl shadow-2xl transform -rotate-3 scale-105 z-0"></div>

  <div class="relative z-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-12 text-center animate-fadeIn">
    <h2 class="text-4xl md:text-5xl font-bold mb-8 text-gray-900 tracking-tight">🚀 My Approach</h2>
    
    <p class="text-gray-700 text-lg md:text-xl mb-6">
      I work with <strong class="text-indigo-600">latest modern technologies</strong> and <strong class="text-pink-600">scalable code structures</strong> 
      to ensure your app is <span class="text-purple-600 font-semibold">fast, secure, and easy to maintain</span>.
    </p>
    
    <p class="text-gray-700 text-lg md:text-xl">
      My true happiness comes from <span class="text-indigo-600 font-semibold">seeing clients satisfied</span> 
      with smooth and efficient web solutions. Every project is a commitment to <span class="text-pink-600 font-semibold">quality, speed, and reliability</span>.
    </p>

    <!-- Optional Animated Icon / Divider -->
    <div class="mt-10 flex justify-center">
      <div class="w-24 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
    </div>
  </div>
</section>

    <!-- Skills / Tech Stacks -->
    <section class="max-w-6xl mx-auto py-16">
      <h2 class="text-4xl font-bold mb-10 text-center text-gray-900">Technologies I Use</h2>
      <div class="flex flex-wrap justify-center gap-8">
        <div class="flex flex-col items-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="w-16 h-16 mb-2" />
          <span class="text-gray-700 font-medium">JavaScript</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" class="w-16 h-16 mb-2" />
          <span class="text-gray-700 font-medium">Vue.js / Nuxt 3</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" class="w-16 h-16 mb-2" />
          <span class="text-gray-700 font-medium">PHP / Laravel</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" class="w-16 h-16 mb-2" />
          <span class="text-gray-700 font-medium">MySQL</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="https://unpkg.com/simple-icons@latest/icons/tailwindcss.svg" class="w-16 h-16 mb-2" />
          <span class="text-gray-700 font-medium">TailwindCSS</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" class="w-16 h-16 mb-2" />
          <span class="text-gray-700 font-medium">Redis</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Optional: You can make experience & tech stacks dynamic later using arrays
</script>

<style scoped>
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
.delay-200 {
  animation-delay: 0.2s;
}
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 1s ease forwards;
}
</style>
