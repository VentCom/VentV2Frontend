<script setup>
import { register } from "swiper/element/bundle";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
register();

const getInstance = (swiperInstance) => {
  console.log(swiperInstance);
};

const slides = ref([
  {
    speaker: "Mark Twain",
    quote: `The secret of getting ahead is getting started. The secret of getting started is breaking your complex, overwhelming tasks into small, manageable ones—then starting on the first.`,
    image: "/img/quote_1.jpeg",
  },
  {
    speaker: "Theodore Roosevelt",
    quote:
      "Believe you can, and you’re halfway there. Every great achievement begins with the belief that you have the power to make a difference. Keep pushing forward, and success will follow.",
    image: "/img/quote_2.jpeg",
  },
  {
    speaker: "Wilson Churchill",
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts. Every challenge is a stepping stone, and persistence is what turns obstacles into achievements.",
    image: "/img/quote_3.jpeg",
  },
]);

onMounted(() => {});
</script>

<template>
  <div class="overflow-hidden rounded-4xl flex bg-[#EDF3FF] relative h-full">
    <swiper-container
      :loop="true"
      :slides-per-view="1"
      :modules="[Navigation, Pagination, Autoplay]"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: true,
      }"
      @init="getInstance"
      class="h-full w-full"
    >
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
        class="relative h-full w-full flex flex-col justify-end p-16 pb-22 overflow-hidden"
      >
        <div
          class="absolute top-0 left-0 w-full h-full bg-brand-color-001 bg-cover bg-center"
        >
          <div class="w-full h-full relative">
            <img
              :src="slide.image"
              class="w-full h-full object-center object-cover"
              alt=""
            />
            <div
              class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0D6A980D] to-60% to-[#1A1A1A]/90 z-1"
            ></div>
          </div>
        </div>
        <div class="relative z-2">
          <img src="/img/quote-left.svg" class="w-[33px] mb-4" alt="" />
          <quote class="text-xl text-brand-color-013">
            {{ slide.quote }}
          </quote>
          <div class="text-base mt-4 text-[#E5F6FF] flex items-center gap-6">
            <ul class="flex items-center gap-1">
              <li class="inline-block w-2 p-[0.5px] bg-white/30"></li>
              <li class="inline-block w-2 p-[0.5px] bg-white/40"></li>
              <li class="inline-block w-2 p-[0.5px] bg-white/50"></li>
              <li class="inline-block w-2 p-[0.5px] bg-white/60"></li>
              <li class="inline-block w-2 p-[0.5px] bg-white/70"></li>
              <li class="inline-block w-2 p-[0.5px] bg-white/80"></li>
            </ul>
            <span>{{ slide.speaker }}</span>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>

    <!-- <div class="absolute bottom-0 right-0 w-full p-16 pt-0 z-2">
      <ul class="flex gap-1 items-center">
        <li class="w-5 h-2.5 rounded-full bg-[#001119]"></li>
        <li class="w-2.5 h-2.5 rounded-full bg-[#DFE3EC]"></li>
        <li class="w-2.5 h-2.5 rounded-full bg-[#DFE3EC]"></li>
      </ul>
    </div> -->
  </div>
</template>
