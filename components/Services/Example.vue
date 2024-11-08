<script setup lang="ts">
type BgType = 'bg-alabaster' | 'bg-lime_green' | 'bg-charcoal';
defineProps({
  bg: {
    type: String as () => BgType,
    required: true
  },
  badgeBg: {
    type: String as () => BgType,
    required: true
  },
  badgeTextTop: {
    type: String,
    required: true
  },
  badgeTextBottom: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div
    :class="`${bg} flex justify-between rounded-big shadow-black border border-charcoal  p-12 w-full h-[200px]`"
  >
    <div class="flex flex-col">
      <Badge
        :text="badgeTextTop"
        :class="`${badgeBg} w-fit inline-block font-medium text-charcoal font-main lg:text-desktop_h3 text-mobile_h3 px-2`"
      />
      <Badge
        :text="badgeTextBottom"
        :class="`${badgeBg} w-fit inline-block font-medium text-charcoal font-main lg:text-desktop_h3 text-mobile_h3 px-2`"
      />
    </div>
    <div class="flex justify-between lg:block">
      <div class="flex items-center self-end gap-4">
        <SVGLinkBlack v-if="bg === 'bg-charcoal'" />
        <SVGLinkLime v-else />
        <p
          :class="`lg:block hidden font-main text-desktop_h4 ${
            bg === 'bg-charcoal' ? 'text-alabaster' : 'text-charcoal'
          }`"
        >
          Learn more
        </p>
      </div>
    </div>
  </div>
</template>
