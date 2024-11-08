<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="flex flex-col gap-5">
    <p class="text-alabaster text-mobile_p lg:text-mobile_p">{{ text }}</p>
    <div class="flex gap-2">
      <p class="text-lime_green text-mobile_h4">Learn more</p>
      <SVGGreenArrow />
    </div>
  </div>
</template>
