<template>
  <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo/Brand -->
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div class="relative">
              <div class="w-14 h-14 bg-black rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <i class="bi bi-book-half text-white text-2xl"></i>
              </div>
              <div class="absolute inset-0 bg-black rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
            <h1 class="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text group-hover:from-gray-600 group-hover:to-gray-400 transition-all">
              Study Social
            </h1>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-1">
          <a href="#how"
            class="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-xl text-base font-semibold transition-all duration-200 hover:bg-gray-50">
            How It Works
          </a>

          <a href="#users"
            class="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-xl text-base font-semibold transition-all duration-200 hover:bg-gray-50">
            Built For Everyone
          </a>

          <a href="#contact"
            class="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-xl text-base font-semibold transition-all duration-200 hover:bg-gray-50">
            Contact Us
          </a>
        </div>

        <!-- CTA Button -->
        <div class="hidden lg:block">
          <router-link to="/signup">
            <button class="group bg-black hover:bg-gradient-to-r hover:from-gray-800 hover:to-black text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <span>Get Started</span>
              <i class="bi bi-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </button>
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button @click="toggleMobile" 
                  class="text-gray-700 hover:text-gray-900 p-2 rounded-xl transition-all duration-200 hover:bg-gray-50"
                  :class="{ 'text-gray-900 bg-gray-50': isMobileOpen }">
            <i class="bi bi-list text-2xl" v-if="!isMobileOpen"></i>
            <i class="bi bi-x-lg text-2xl" v-if="isMobileOpen"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <Transition enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 -translate-y-4"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-4">
      <div class="lg:hidden" v-show="isMobileOpen">
        <div class="px-4 pt-2 pb-6 space-y-2 border-t border-gray-100 bg-white/95 backdrop-blur-md">

          <a href="#how" @click="toggleMobile"
            class="block text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200">
            <i class="bi bi-gear mr-3"></i>
            How It Works
          </a>

          <a href="#users" @click="toggleMobile"
            class="block text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200">
            <i class="bi bi-people mr-3"></i>
            Built For Everyone
          </a>

          <a href="#contact" @click="toggleMobile"
            class="block text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200">
            <i class="bi bi-envelope mr-3"></i>
            Contact Us
          </a>

          <!-- Mobile CTA -->
          <router-link to="/signup" @click="toggleMobile">
            <button class="w-full mt-4 bg-black hover:bg-gradient-to-r hover:from-gray-800 hover:to-black text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
              <span>Get Started</span>
              <i class="bi bi-arrow-right"></i>
            </button>
          </router-link>
        </div>
      </div>
    </Transition>
  </nav>

  <!-- Main content -->
  <MainContent />
</template>

<script setup>
import MainContent from './MainContent.vue'
import { ref } from 'vue'

const isMobileOpen = ref(false)

const toggleMobile = () => {
  isMobileOpen.value = !isMobileOpen.value
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #333;
}
</style>