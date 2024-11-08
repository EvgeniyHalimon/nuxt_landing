<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="flex flex-col items-center gap-10 mb-10 lg:flex-row lg:mb-20">
    <Badge
      :text="title"
      class="px-2 font-medium bg-lime_green text-charcoal font-main text-desktop_h2"
    />
    <p class="text-center text-charcoal font-main text-desktop_p lg:text-start" v-html="text"></p>
  </div>
</template>
