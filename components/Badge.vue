<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>

<template>
  <h2 class="rounded-badge text-charcoal">{{ text }}</h2>
</template>
