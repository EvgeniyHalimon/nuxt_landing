<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Grotesk:wght@300..700&display=swap'
    }
  ]
});
</script>

<template>
  <div class="xl:px-[120px] xl:pt-[66px]">
    <div class="px-5 pt-[30px] xl:pt-0 xl:px-0">
      <Navigation />
      <Hero />
      <Services />
      <Case />
      <Process />
      <Team />
      <Testimonials />
      <ContactUs />
    </div>
    <Footer />
  </div>
</template>
