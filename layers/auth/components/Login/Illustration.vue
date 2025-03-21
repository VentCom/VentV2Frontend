<script setup>
import { register } from "swiper/element/bundle";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
register();

const getInstance = (swiperInstance) => {
  console.log(swiperInstance);
};

const slides = ref([
  {
    heading: "Your Work. Your Way.",
    description:
      "Tailored for efficiency. Log in to customize your experience and streamline your daily operations.",
    image: "/img/illustration_1.svg",
  },
  {
    heading: "Stay in Control",
    description:
      "Access everything you need in one place. Sign in to manage your tasks, track progress, and stay productive.",
    image: "/img/illustration_1.svg",
  },
  {
    heading: "Optimize Your Processes",
    description:
      "Work smarter, not harder. Log in to access powerful tools that streamline your workflow and boost efficiency.",
    image: "/img/illustration_1.svg",
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
        class="relative h-full w-full flex flex-col justify-end p-16 pb-22"
      >
        <div>
          <h3 class="text-3xl text-[#001119] font-semibold">
            {{ slide.heading }}
          </h3>
          <p class="text-base mt-4 text-[#333333]">
            {{ slide.description }}
          </p>
        </div>
      </swiper-slide>
    </swiper-container>

    <div class="absolute bottom-0 right-0 w-full p-16 pt-0 z-2">
      <ul class="flex gap-1 items-center">
        <li class="w-5 h-2.5 rounded-full bg-[#001119]"></li>
        <li class="w-2.5 h-2.5 rounded-full bg-[#DFE3EC]"></li>
        <li class="w-2.5 h-2.5 rounded-full bg-[#DFE3EC]"></li>
      </ul>
    </div>
  </div>
</template>
