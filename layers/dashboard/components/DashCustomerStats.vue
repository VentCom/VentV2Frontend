<script setup lang="ts">
const stats = [
  {
    title: "Unverified Users",
    value: "564",
    bgColor: "border-l-2 border-dashboard-card-border",
  },
  {
    title: "Verified Users",
    value: "905,456",
    bgColor: "border-l-2 border-brand-color-default",
  },
];
</script>
<template>
  <div
    class="min-h-[174px] border border-dashboard-card-border rounded-[16px] p-5 flex flex-col justify-between w-full grow"
  >
    <h2 class="font-bold text-dashboard-heading mb-8 text-base">
      Customers Stats
    </h2>

    <div class="grid grid-cols-2 gap-2">
      <div v-for="stat in stats" class="w-full relative pb-4.5 pl-1.5">
        <ul
          class="w-full h-full top-0 left-0 absolute flex justify-between gap-3"
        >
          <li v-for="i in 12" class="h-full bars" :class="[stat.bgColor]"></li>
        </ul>
        <div class="pb-4.5 pl-3 relative z-[2] bg-dashboard-bg">
          <h3 class="text-dashboard-text text-[0.813rem]">{{ stat.title }}</h3>
          <p
            class="text-brand-color-004 font-alternative mt-1 text-xl font-bold"
          >
            {{ stat.value }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bars {
  animation: bars 0.5s ease-in-out 1 forwards;
  transform-origin: bottom left;
  animation-delay: 0.2s;
}

@keyframes bars {
  0% {
    height: 0%;
  }
  100% {
    height: 100%;
  }
}
</style>
