<template>
  <div
    class="min-h-[370px] border border-dashboard-card-border rounded-[16px] p-5 flex flex-col justify-between gap-8"
  >
    <div class="flex justify-between items-center gap-4">
      <div class="grow">
        <h2 class="font-bold text-dashboard-heading mb-1 text-base">
          Transaction Volume
        </h2>
        <p class="text-[0.813rem]">
          Vent’s transaction volume across all platforms
        </p>
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

    <div class="flex flex-col gap-2 w-full">
      <img src="/img/transact_volume_graph.svg" class="w-full" alt="" />
      <img src="/img/transact_volume_footer.svg" class="w-full" alt="" />
    </div>
  </div>
</template>
