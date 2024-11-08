<script setup lang="ts">
const stages = [
  {
    id: 1,
    title: 'Consultation',
    text: 'In the initial consultation, we discuss your business goals, target audience, and current marketing efforts. This helps us understand your needs and customize our services to best fit your requirements.'
  },
  {
    id: 2,
    title: 'Research and Strategy Development',
    text: 'We conduct market and competitor research to develop a strategic plan aimed at achieving your business goals effectively.'
  },
  {
    id: 3,
    title: 'Implementation',
    text: 'Executing the strategy using the selected marketing tools and tactics to start driving results.'
  },
  {
    id: 4,
    title: 'Monitoring and Optimization',
    text: 'Continuously monitoring performance and optimizing the campaign to improve effectiveness over time.'
  },
  {
    id: 5,
    title: 'Reporting and Communication',
    text: 'Providing regular reports and updates to keep you informed of progress and results.'
  },
  {
    id: 6,
    title: 'Continual Improvement',
    text: 'Making ongoing adjustments based on data and feedback to continually improve and adapt the strategy to changing conditions.'
  }
];
</script>

<template>
  <SectionTitle
    title="Our Working Process"
    :text="`Step-by-Step Guide to Achieving <br/> Your Business Goals`"
  />

  <div class="flex flex-col lg:gap-[30px] gap-5 xl:mb-[140px] mb-16">
    <ProcessStage
      v-for="stage in stages"
      :number="stage.id"
      :title="stage.title"
      :text="stage.text"
    />
  </div>
</template>
