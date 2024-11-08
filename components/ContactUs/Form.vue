<template>
  <form class="flex flex-col">
    <div class="flex items-center gap-10 mb-5 xl:mb-10">
      <div class="flex items-center">
        <input
          id="custom-radio"
          type="radio"
          name="custom-radio"
          class="relative border border-black rounded-full appearance-none w-7 h-7 checked:bg-transparent"
        />
        <label for="default-radio-1" class="font-medium text-desktop_p font-main text-charcoal ms-2"
          >Say Hi</label
        >
      </div>
      <div class="flex items-center">
        <input
          id="custom-radio"
          type="radio"
          name="custom-radio"
          class="relative border border-black rounded-full appearance-none w-7 h-7 checked:bg-transparent"
        />
        <label for="default-radio-2" class="font-medium text-desktop_p font-main text-charcoal ms-2"
          >Get a Quote</label
        >
      </div>
    </div>
    <ContactUsInput name="name" placeholder="name" />
    <ContactUsInput name="email" placeholder="email" />
    <ContactUsInput name="message" placeholder="message" />
    <Button
      title="Send message"
      class="text-white bg-charcoal rounded-main h-[68px] sm:w-[270px] w-full self-end"
    />
  </form>
</template>

<style>
#custom-radio:checked::before {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 16px;
  height: 16px;
  background-color: #b9ff66;
  border-radius: 50%;
}
</style>
