<script setup lang="ts">
const team = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO',
    text: 'John is the visionary behind the company, overseeing all operations and setting strategic goals. With years of experience in business leadership, he ensures that the company stays on course toward achieving its long-term goals.'
  },
  {
    id: 2,
    name: 'Morgan Smith',
    position: 'Lead Developer',
    text: 'Morgan is responsible for leading the development team, ensuring that all projects are executed efficiently and on time. He has a strong background in full-stack development and is passionate about new technologies and solutions.'
  },
  {
    id: 3,
    name: 'Mark Taylor',
    position: 'Product Manager',
    text: 'Mark plays a key role in bridging the gap between the technical team and the business side of the company. He ensures that the products meet the customers’ needs and are delivered on time and within scope.'
  },
  {
    id: 4,
    name: 'Bob Johnson',
    position: 'Marketing Director',
    text: 'Bob is in charge of building the company’s brand, driving growth through innovative marketing strategies. His expertise in digital marketing helps the company maintain its presence across multiple platforms.'
  },
  {
    id: 5,
    name: 'Samuel Green',
    position: 'SEO Specialist',
    text: 'Samuel ensures the company’s website ranks highly on search engines. He utilizes both on-page and off-page SEO strategies to improve visibility and drive organic traffic, helping the company reach its target audience.'
  },
  {
    id: 6,
    name: 'Bill White',
    position: 'Customer  Manager',
    text: 'Bill focuses on ensuring that clients are satisfied with the company’s products and services. He works closely with the sales and support teams to ensure seamless customer experiences and long-term satisfaction.'
  }
];
</script>

<template>
  <div class="flex flex-col lg:mb-24 mb-[60px]">
    <SectionTitle
      title="Team"
      :text="`Meet the skilled and experienced team behind our <br/> successful digital marketing strategies`"
    />
    <div class="grid grid-cols-1 lg:gap-10 sm:grid-cols-2 xl:grid-cols-3 gap-7 pb-[30px]">
      <TeamMate
        v-for="{ id, name, position, text } in team"
        :name="name"
        :position="position"
        :text="text"
        :id="id"
      >
        <SVGTeammate1 />
      </TeamMate>
    </div>
    <Button
      title="See them all"
      class="text-white bg-charcoal rounded-main h-[68px] sm:w-[270px] w-full mb-4 self-end"
    />
  </div>
</template>
