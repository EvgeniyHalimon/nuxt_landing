<template>
  <nav class="flex flex-col items-center justify-between gap-5 mb-8 xl:mb-16 lg:flex-row">
    <div>
      <SVGLogoDesktopWhite />
    </div>
    <ul class="flex flex-col items-center gap-5 xl:gap-10 lg:flex-row">
      <li class="underline cursor-pointer xl:text-desktop_p text-mobile_p">About us</li>
      <li class="underline cursor-pointer xl:text-desktop_p text-mobile_p">Services</li>
      <li class="underline cursor-pointer xl:text-desktop_p text-mobile_p">Use Cases</li>
      <li class="underline cursor-pointer xl:text-desktop_p text-mobile_p">Pricing</li>
      <li class="underline cursor-pointer xl:text-desktop_p text-mobile_p">Blog</li>
    </ul>
    <div class="hidden xl:block">
      <slot />
    </div>
  </nav>
</template>
