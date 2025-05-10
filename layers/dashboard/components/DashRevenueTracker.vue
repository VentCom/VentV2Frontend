<template>
  <div
    class="min-h-[329px] border border-dashboard-card-border rounded-[16px] p-5 flex flex-col justify-between gap-8 grow"
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
          <icon name="vent:dollar-circle" size="1.2rem"></icon>
          <span>All Crypto</span>
          <icon name="vent:arrow-down" size="1.2rem"></icon>
        </button>
      </div>
    </div>

    <div>
      <img src="/img/revenue_tracker.svg" class="w-full" alt="" />
    </div>
  </div>
</template>
