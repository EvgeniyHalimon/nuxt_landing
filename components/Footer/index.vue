<template>
  <footer
    class="bg-charcoal xl:rounded-t-big xl:px-[60px] xl:py-[50px] px-5 pt-[50px] pb-7 text-white font-main"
  >
    <FooterNav>
      <FooterIcons />
    </FooterNav>

    <div class="flex flex-col justify-between gap-5 xl:pb-12 pb-9 xl:gap-0 xl:flex-row">
      <FooterContactUs />
      <FooterForm />
      <div class="block mx-auto mt-4 mb-auto lg:hidden">
        <FooterIcons />
      </div>
    </div>

    <FooterBottom />
  </footer>
</template>
