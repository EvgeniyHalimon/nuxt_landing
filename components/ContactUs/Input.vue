<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="mb-5 xl:mb-6">
    <label
      :for="name"
      class="block mb-1 font-medium capitalize text-mobile_p font-main text-charcoal"
    >
      {{ name }}
    </label>

    <input
      v-if="name !== 'message'"
      :id="name"
      :name="name"
      type="text"
      :placeholder="placeholder"
      class="block w-full h-[60px] px-3 py-2 bg-white border placeholder:capitalize rounded-main border-charcoal font-main text-charcoal placeholder:text-[#898989] placeholder:text-mobile_p text-mobile_p xl:text-desktop_p xl:placeholder:text-desktop_p focus:outline-none focus:ring-2 focus:ring-slate-600"
    />
    <textarea
      v-else
      :id="name"
      :name="name"
      :placeholder="placeholder"
      class="block w-full px-3 py-2 h-48 placeholder:capitalize bg-white border resize-none rounded-main border-charcoal font-main text-charcoal placeholder:text-[#898989] placeholder:text-mobile_p text-mobile_p xl:text-desktop_p xl:placeholder:text-desktop_p focus:outline-none focus:ring-2 focus:ring-slate-600"
    ></textarea>
  </div>
</template>
