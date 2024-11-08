<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  },
  position: {
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
  <div class="p-8 border border-charcoal rounded-big shadow-black">
    <div class="flex justify-between pb-5">
      <div class="flex gap-4">
        <slot />
        <div class="flex flex-col self-end gap-2">
          <h3 class="font-medium lg:text-desktop_h4 text-mobile_h4 font-main">
            {{ name }}
          </h3>
          <p class="lg:text-desktop_p text-mobile_p font-main">{{ position }}</p>
        </div>
      </div>
      <SVGLinkedInLime class="self-start" />
    </div>
    <p class="pt-5 border-t border-charcoal lg:text-desktop_p text-mobile_p font-main">
      {{ text }}
    </p>
  </div>
</template>
