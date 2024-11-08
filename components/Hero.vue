<template>
  <div class="flex justify-between gap-24 mb-[70px]">
    <div class="flex flex-col items-center xl:items-start gap-9">
      <h1 class="font-medium xl:text-desktop_h1 text-mobile_h1 font-main">
        Navigating the digital landscape for success
      </h1>
      <SVGHeroMobile />
      <p class="xl:text-desktop_h4 text-mobile_p font-main">
        Our digital marketing agency helps businesses grow and succeed online through a range of
        services including SEO, PPC, social media marketing, and content creation.
      </p>
      <Button
        title="Book a consultation"
        class="text-white h-[68px] bg-charcoal text-desktop_h4 lg:w-[264px] w-full"
      />
    </div>
    <div class="hidden xl:block">
      <SVGHeroDesktop />
    </div>
  </div>
</template>
