<template>
  <div
    class="border border-dashboard-card-border rounded-[16px] p-5 flex flex-col justify-between gap-8"
  >
    <div class="flex justify-between items-center gap-4">
      <div class="grow">
        <h2 class="font-bold text-dashboard-heading mb-1 text-base">
          Trade Stats
        </h2>
        <p class="text-[0.813rem]">Vent’s trade stats across all platforms</p>
      </div>

      <div class="inline-block shrink-0">
        <button
          class="border border-dashboard-card-border rounded-full py-2 px-3 flex items-center gap-2 bg-dashboard-bg-darker hover hover:bg-brand-color-013 hover:border-brand-color-default text-dashboard-heading text-[0.813rem]"
        >
          <icon name="vent:calendar-2" size="1.2rem"></icon>
          <span>Today</span>
          <icon name="vent:arrow-down" size="1.2rem"></icon>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div
        class="border border-dashboard-card-border rounded-[12px] p-5 relative overflow-hidden"
        v-for="i in 8"
      >
        <img
          src="/img/bubble.svg"
          class="absolute top-0 right-0 w-[60px] z-[1]"
          alt=""
        />
        <h3 class="text-[0.813rem] text-dashboard-text mb-7 relative z-[3]">
          Nigerian Naira
        </h3>
        <p class="text-brand-color-003 font-semibold text-lg relative z-[3]">
          N15,980,534
        </p>
      </div>
    </div>
  </div>
</template>
