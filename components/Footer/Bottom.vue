<script setup lang="ts">
let year = new Date().getFullYear();
</script>

<template>
  <div class="flex flex-col items-center gap-10 pt-12 border-t border-white lg:flex-row">
    <p>© {{ year }} Positivus. All Rights Reserved.</p>
    <NuxtLink to="#" class="underline text-desktop_p"> Privacy Policy </NuxtLink>
  </div>
</template>
