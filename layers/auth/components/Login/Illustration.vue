<script setup>
import { register } from "swiper/element/bundle";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
register();

const getInstance = (swiperInstance) => {};

const slides = ref([
  {
    speaker: "Mark Twain",
    year: 1992,
    quote: `The secret of getting ahead is getting started. The secret of getting started is breaking your complex, overwhelming tasks into small, manageable ones—then starting on the first.`,
    image: "/img/quote_1.jpeg",
  },
  {
    speaker: "Theodore Roosevelt",
    year: 1992,
    quote:
      "Believe you can, and you’re halfway there. Every great achievement begins with the belief that you have the power to make a difference. Keep pushing forward, and success will follow.",
    image: "/img/quote_2.jpeg",
  },
  {
    speaker: "Wilson Churchill",
    year: 1992,
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts. Every challenge is a stepping stone, and persistence is what turns obstacles into achievements.",
    image: "/img/quote_3.jpeg",
  },
]);

onMounted(() => {});
</script>

<template>
  <div class="flex relative h-full">
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
        class="relative h-full w-full flex flex-col justify-end p-16 pb-5 overflow-hidden"
      >
        <div class="absolute top-0 left-0 w-full h-full">
          <div class="w-full h-full relative"></div>
        </div>
        <div
          class="p-4 rounded-[24px] bg-[#001119] drop-shadow-2xl grid grid-col-1 gap-1 border-4 border-[#002233]"
        >
          <p class="text-[13px] uppercase text-[#FFFFFF]">QUOTE OF THE DAY</p>
          <div class="relative z-2 rounded-[16px] p-10 bg-[#001119]">
            <img src="/img/quote-left.svg" class="w-[33px] mb-4" alt="" />
            <quote class="text-xl text-brand-color-013">
              {{ slide.quote }}
            </quote>
          </div>
          <div class="flex items-center gap-3 text-base text-white">
            <Icon name="vent:microphone-2" size="20px" />
            <span>{{ slide.speaker }}, {{ slide.year }}</span>
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
