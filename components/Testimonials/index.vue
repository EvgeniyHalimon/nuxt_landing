<script setup lang="ts">
import { ref } from 'vue';

const currentSlide = ref(1);
const slides = [1, 2, 3, 4, 5];
const lastSlide = slides[slides.length - 1];
const setSlide = (slide: number) => {
  currentSlide.value = slide;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 1 ? lastSlide : currentSlide.value - 1;
};

const nextSlide = () => {
  currentSlide.value = currentSlide.value === lastSlide ? slides[0] : currentSlide.value + 1;
};

const translatePercent = () => {
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;

    if (width <= 768) {
      return 85;
    } else if (width <= 1024) {
      return 56;
    } else if (width <= 1536 && width >= 1024) {
      return 45;
    } else {
      return 25;
    }
  } else {
    return 85;
  }
};
</script>

<template>
  <SectionTitle
    title="Testimonials"
    :text="`Hear from Our Satisfied Clients: Read Our Testimonials <br/> to Learn More about Our Digital Marketing Services`"
  />
  <div class="bg-charcoal rounded-big xl:py-[60px] py-[30px] xl:mb-[60px] mb-[30px]">
    <div class="relative w-full h-full overflow-hidden">
      <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${(currentSlide - 1) * translatePercent()}%)` }"
      >
        <TestimonialsExample
          v-for="slide in slides"
          :key="slide"
          :slide="slide"
          class="ml-8 xl:ml-14 first:mr-0"
        />
      </div>
    </div>

    <div class="flex items-center justify-between mx-8 mt-4 xl:mx-14">
      <button @click="prevSlide" class="slider-button">‹</button>
      <div class="flex gap-2">
        <button
          v-for="slide in slides"
          :key="slide"
          @click="() => setSlide(slide)"
          :class="`w-3 h-3 rounded-full ${slide === currentSlide ? 'bg-lime_green ' : 'bg-white'}`"
        ></button>
      </div>
      <button @click="nextSlide" class="slider-button">›</button>
    </div>
  </div>
</template>

<style scoped>
.slider-button {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  border: 2px solid #000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.slider-button:hover {
  background-color: #d4edda;
  transform: scale(1.1);
}
</style>
