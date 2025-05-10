<script setup lang="ts">
const stats = [
  {
    title: "Post No Debit",
    value: "564",
    bgColor: "border-l-2 border-dashboard-card-border",
  },
  {
    title: "Pending",
    value: "905",
    bgColor: "border-l-2 border-orange-008",
  },
  {
    title: "Paid",
    value: "905",
    bgColor: "border-l-2 border-brand-color-default",
  },
];
</script>
<template>
  <div
    class="min-h-[215px] border border-dashboard-card-border rounded-[16px] p-5 flex flex-col justify-between w-full"
  >
    <div class="flex justify-between items-center gap-4 mb-8">
      <div class="grow">
        <h2 class="font-bold text-dashboard-heading mb-1 text-base">
          Settlements Stats
        </h2>
      </div>

      <div class="inline-block shrink-0">
        <button
          class="border border-dashboard-card-border rounded-full py-2 px-3 flex items-center gap-2 bg-dashboard-bg-darker hover hover:bg-brand-color-013 hover:border-brand-color-default text-dashboard-heading text-[0.813rem]"
        >
          <icon name="vent:dollar-circle" size="1.2rem"></icon>
          <span>NGN</span>
          <icon name="vent:arrow-down" size="1.2rem"></icon>
        </button>
      </div>
    </div>

    <!-- stats -->
    <div class="grid grid-cols-3 gap-2">
      <div v-for="stat in stats" class="w-full relative pb-5 pl-1.5">
        <ul
          class="w-full h-full top-0 left-0 absolute flex justify-between gap-1 overflow-hidden"
        >
          <li v-for="i in 12" class="h-full bars" :class="[stat.bgColor]"></li>
        </ul>
        <div class="pb-4.5 pl-3 relative z-[2] bg-dashboard-bg">
          <h3 class="text-dashboard-text text-[10px]">{{ stat.title }}</h3>
          <p
            class="text-brand-color-004 font-alternative mt-1 text-base md:text-xl font-bold"
          >
            {{ stat.value }}
          </p>
        </div>
      </div>
    </div>
    <!-- stats end-->
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
