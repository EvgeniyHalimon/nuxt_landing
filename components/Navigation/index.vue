<template>
  <nav class="flex justify-between items-center xl:mb-[76px] mb-10">
    <div>
      <SVGLogoDesktopBlack />
    </div>
    <ul class="items-center hidden gap-10 xl:flex">
      <li class="cursor-pointer font-main text-charcoal">About us</li>
      <li class="cursor-pointer font-main text-charcoal">Services</li>
      <li class="cursor-pointer font-main text-charcoal">Use Cases</li>
      <li class="cursor-pointer font-main text-charcoal">Pricing</li>
      <li class="cursor-pointer font-main text-charcoal">Blog</li>
      <li>
        <Button
          title="Request a quote"
          class="rounded-main w-[230px] border border-charcoal font-main"
        />
      </li>
    </ul>
    <NavigationMenu />
  </nav>
</template>
