<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  number: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

const open = ref(false);
const toggleOpen = () => {
  open.value = !open.value;
};
</script>

<template>
  <div
    :class="`${
      open ? 'bg-lime_green' : 'bg-alabaster'
    } p-8 border border-charcoal lg:py-10 rounded-big shadow-black lg:px-14`"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3 lg:gap-5">
        <h2 class="font-medium lg:text-desktop_h1 text-desktop_h3 font-main">{{ `0${number}` }}</h2>
        <p class="font-charcoal lg:text-desktop_h3 text-mobile_h4 font-main">{{ title }}</p>
      </div>
      <button
        class="border-charcoal w-[30px] flex items-center justify-center h-[30px] border lg:text-5xl text-2xl text-center lg:font-extrabold font-bold rounded-full lg:w-[58px] lg:h-[58px] lg:pb-1"
        @click="toggleOpen"
      >
        <p>
          {{ open ? '-' : '+' }}
        </p>
      </button>
    </div>
    <transition name="collapse">
      <div
        v-if="open"
        class="border-t border-charcoal lg:mt-[30px] lg:pt-[30px] mt-5 pt-5 overflow-hidden"
      >
        <p class="font-charcoal lg:text-desktop_p text-mobile_p font-main">{{ text }}</p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.collapse-enter-active,
.collapse-leave-active {
  transition: max-height 0.5s ease, opacity 0.5s ease;
}
.collapse-enter-from,
.collapse-leave-to {
  max-height: 0;
  opacity: 0;
}
.collapse-enter-to,
.collapse-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
