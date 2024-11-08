<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="xl:hidden">
    <button @click="toggleMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
      </svg>
    </button>
  </div>

  <transition name="slide-fade">
    <ul
      v-if="isMenuOpen"
      class="absolute flex flex-col items-end gap-3 mt-4 xl:hidden top-10 right-5"
    >
      <li class="cursor-pointer font-main text-charcoal">About us</li>
      <li class="cursor-pointer font-main text-charcoal">Services</li>
      <li class="cursor-pointer font-main text-charcoal">Use Cases</li>
      <li class="cursor-pointer font-main text-charcoal">Pricing</li>
      <li class="cursor-pointer font-main text-charcoal">Blog</li>
    </ul>
  </transition>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
