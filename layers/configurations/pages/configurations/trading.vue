<script lang="ts" setup>
definePageMeta({
  pageTransition: { name: "page-zoom", mode: "out-in" },
});
</script>
<template>
  <div>
    <!-- heading -->
    <div class="w-full mb-8">
      <h2 class="font-bold text-dashboard-heading text-xl md:text-2xl">
        Trading Rates
      </h2>
      <p class="text-[0.813rem] text-dashboard-text">
        Customize your trading experience across all platforms
      </p>
    </div>
    <!-- heading end-->

    <div class="grid grid-cols-1 gap-8">
      <ConfigTradingRateRanges></ConfigTradingRateRanges>
    </div>
  </div>
</template>
