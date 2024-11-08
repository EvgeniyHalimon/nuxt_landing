<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<template>
  <button class="h-[68px] rounded-main font-main">{{ title }}</button>
</template>
