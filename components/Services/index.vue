<template>
  <div class="mb-16 lg:mb-28">
    <SectionTitle
      title="Services"
      :text="`At our digital marketing agency, we offer a range of services to <br/>
        help businesses grow and succeed online. These services include:`"
    />
    <div class="grid grid-cols-1 gap-4 lg:gap-10 lg:grid-cols-2">
      <ServicesExample
        bg="bg-alabaster"
        badge-bg="bg-lime_green"
        badge-text-top="Search engine"
        badge-text-bottom="optimization"
      >
        <template #picDesktop>
          <p>Desktop Slot Content</p>
        </template>
        <template #picMobile> </template>
      </ServicesExample>

      <ServicesExample
        bg="bg-lime_green"
        badge-bg="bg-alabaster"
        badge-text-top="Pay-per-click"
        badge-text-bottom="advertizing"
      >
        <template #picDesktop>
          <p>Desktop Slot Content</p>
        </template>
        <template #picMobile> </template>
      </ServicesExample>

      <ServicesExample
        bg="bg-charcoal"
        badge-bg="bg-alabaster"
        badge-text-top="Search engine"
        badge-text-bottom="optimization"
      >
        <template #picDesktop>
          <p>Desktop Slot Content</p>
        </template>
        <template #picMobile> </template>
      </ServicesExample>

      <ServicesExample
        bg="bg-alabaster"
        badge-bg="bg-lime_green"
        badge-text-top="Email"
        badge-text-bottom="Marketing"
      >
        <template #picDesktop>
          <p>Desktop Slot Content</p>
        </template>
        <template #picMobile> </template>
      </ServicesExample>

      <ServicesExample
        bg="bg-lime_green"
        badge-bg="bg-alabaster"
        badge-text-top="Content"
        badge-text-bottom="Creation"
      >
        <template #picDesktop>
          <p>Desktop Slot Content</p>
        </template>
        <template #picMobile> </template>
      </ServicesExample>

      <ServicesExample
        bg="bg-charcoal"
        badge-bg="bg-lime_green"
        badge-text-top="Analytics and"
        badge-text-bottom="Tracking"
      >
        <template #picDesktop>
          <p>Desktop Slot Content</p>
        </template>
        <template #picMobile> </template>
      </ServicesExample>
    </div>
  </div>
  <div class="flex justify-between gap-6 mb-[70px] bg-alabaster rounded-big p-[50px] xl:p-[60px]">
    <div class="flex flex-col items-center w-full gap-6 xl:items-start xl:w-1/2">
      <h2 class="font-medium xl:text-desktop_h3 text-mobile_h3 font-main">
        Let’s make things happen
      </h2>

      <p class="xl:text-desktop_p text-mobile_p font-main">
        Contact us today to learn more about how our digital marketing services can help your
        business grow and succeed online.
      </p>
      <Button
        title="Get your free proposal"
        class="text-white h-[68px] bg-charcoal text-desktop_h4 lg:w-[264px] w-full"
      />
    </div>

    <div class="relative hidden w-full xl:block xl:w-1/2">
      <div class="absolute top-[-75px] right-[10px]">
        <SVGIllustration />
      </div>
    </div>
  </div>
</template>
