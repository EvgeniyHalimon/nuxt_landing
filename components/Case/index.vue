<template>
  <SectionTitle
    title="Case Studies"
    :text="`Explore Real-Life Examples of Our Proven Digital Marketing <br/> Success through Our Case Studies`"
  />
  <div
    class="flex-wrap items-stretch hidden p-10 bg-charcoal md:flex rounded-big gap-14 mb-[140px]"
  >
    <CaseExample
      text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
      class="flex-1"
    />
    <CaseExample
      text="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
      class="flex-1 px-8 border-white border-x"
    />
    <CaseExample
      text="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
      class="flex-1"
    />
  </div>
  <div class="flex gap-5 mb-16 overflow-x-auto md:hidden whitespace-nowrap scrollbar-hide">
    <CaseExample
      text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
      class="flex-shrink-0 w-[300px] px-[30px] py-[42px] bg-charcoal rounded-big case-wrap"
    />
    <CaseExample
      text="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
      class="flex-shrink-0 w-[300px] px-[30px] py-[42px] bg-charcoal rounded-big case-wrap"
    />
    <CaseExample
      text="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
      class="flex-shrink-0 w-[300px] px-[30px] py-[42px] bg-charcoal rounded-big case-wrap"
    />
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.case-wrap {
  text-wrap: initial;
}
</style>
