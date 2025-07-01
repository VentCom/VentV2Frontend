<script setup lang="ts">
import { ref, computed } from "vue";

// Mock data for revenue tracking
const revenueData = ref([
  { day: "Sun", revenue: 125000, growth: 12.5 },
  { day: "Mon", revenue: 145000, growth: 16.0 },
  { day: "Tue", revenue: 138000, growth: -4.8 },
  { day: "Wed", revenue: 162000, growth: 17.4 },
  { day: "Thu", revenue: 178000, growth: 9.9 },
  { day: "Fri", revenue: 195000, growth: 9.6 },
  { day: "Sat", revenue: 300000, growth: 100 },
]);

const selectedPeriod = ref("all");
const selectedCurrency = ref("all");

const periods = [
  { value: "today", label: "Today" },
  { value: "week", label: "This Week" },
  { value: "month", label: "This Month" },
  { value: "quarter", label: "This Quarter" },
  { value: "year", label: "This Year" },
  { value: "all", label: "All Time" },
];

const currencies = [
  { value: "all", label: "All Crypto", icon: "vent:dollar-circle" },
  { value: "btc", label: "Bitcoin", icon: "vent:dollar-circle" },
  { value: "eth", label: "Ethereum", icon: "vent:dollar-circle" },
  { value: "usdt", label: "USDT", icon: "vent:dollar-circle" },
];

const totalRevenue = computed(() => {
  return revenueData.value.reduce((sum, item) => sum + item.revenue, 0);
});

const averageGrowth = computed(() => {
  const totalGrowth = revenueData.value.reduce(
    (sum, item) => sum + item.growth,
    0
  );
  return (totalGrowth / revenueData.value.length).toFixed(1);
});

const maxRevenue = computed(() => {
  return Math.max(...revenueData.value.map((item) => item.revenue));
});

const getBarHeight = (revenue: number) => {
  const height = (revenue / maxRevenue.value) * 100;
  console.log(
    `Revenue: ${revenue}, Max: ${maxRevenue.value}, Height: ${height}%`
  );
  return height;
};

const getBarColor = (growth: number) => {
  if (growth > 0) return "bg-brand-color-default";
  if (growth < 0) return "bg-orange-default";
  return "bg-dashboard-card-border";
};
</script>

<template>
  <div
    class="min-h-[329px] border border-dashboard-card-border rounded-[16px] p-5 flex flex-col justify-between gap-8 grow"
  >
    <!-- Header -->
    <div class="flex justify-between items-center gap-4">
      <div class="grow">
        <h2 class="font-bold text-dashboard-heading mb-1 text-base">
          Revenue Tracker
        </h2>
        <p class="text-[0.813rem] text-dashboard-text">
          Track revenue performance across all platforms
        </p>
      </div>

      <!-- Currency Filter -->
      <div class="inline-block shrink-0">
        <button
          class="border border-dashboard-card-border rounded-full py-2 px-3 flex items-center gap-2 bg-dashboard-bg-darker hover:bg-brand-color-013 hover:border-brand-color-default text-dashboard-heading text-[0.813rem] transition-all duration-300 ease-in-out"
        >
          <icon name="vent:dollar-circle" size="1.2rem"></icon>
          <span>{{
            currencies.find((c) => c.value === selectedCurrency)?.label
          }}</span>
          <icon name="vent:arrow-down" size="1.2rem"></icon>
        </button>
      </div>
    </div>

    <!-- Chart -->
    <div
      class="flex-1 flex items-end justify-between gap-1 min-h-[140px] bg-gray-100 p-2"
    >
      <div
        v-for="(item, index) in revenueData"
        :key="index"
        class="flex-1 flex flex-col items-center gap-2"
      >
        <!-- Bar -->
        <div
          class="w-full relative h-46 bg-white flex flex-col justify-end items-stretch group"
        >
          <div
            class="w-full rounded-b-full bg-dashboard-bg group-hover:bg-gradient-to-t from-70% from-[#F2F4F7] to-[#F2F4F71C] transition-all duration-500 ease-in-out hover:opacity-80 cursor-pointer relative flex flex-col items-center justify-between p-2"
            :style="{
              height: `${getBarHeight(item.revenue)}%`,
              minHeight: '4px',
            }"
          >
            <span
              class="w-2 h-2 shrink-0 bg-brand-color-default group-hover:w-full group-hover:!bg-brand-color-003 text-white text-[8px] group-hover:h-5 flex items-center justify-center transition-all duration-500 ease-in-out rounded-full"
            >
              <span class="hidden group-hover:inline">$140k</span>
            </span>
            <span
              class="h-full border-l inline-block border-dashboard-card-border"
            ></span>
            <span
              class="w-full aspect-square uppercase shrink-0 flex items-center justify-center rounded-full text-sm text-dashboard-heading bg-[#F2F4F7] group-hover:bg-brand-color-default group-hover:text-white"
            >
              {{ item.day.slice(0, 1) }}
            </span>
          </div>
        </div>

        <!-- Growth Indicator -->
        <!-- <div
          class="w-2 h-2 rounded-full"
          :class="
            item.growth > 0
              ? 'bg-brand-color-default'
              : item.growth < 0
              ? 'bg-orange-default'
              : 'bg-dashboard-card-border'
          "
        ></div> -->
      </div>
    </div>

    <!-- Revenue Stats -->
    <div class="flex items-center gap-2 w-full">
      <p
        class="text-3xl font-bold text-brand-color-004 font-alternative shrink-0"
      >
        +{{ parseFloat(averageGrowth).toFixed(0) }}%
      </p>
      <p class="text-dashboard-text text-[0.813rem] leading-[100%] shrink-0">
        Higher than last week’s trades
      </p>
      <div class="grow border-b border-dashboard-card-border"></div>
    </div>

    <!-- Legend -->
    <!-- <div class="flex items-center justify-center gap-6 text-[0.6rem]">
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 bg-brand-color-default rounded-sm"></div>
        <span class="text-dashboard-text">Positive Growth</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 bg-orange-default rounded-sm"></div>
        <span class="text-dashboard-text">Negative Growth</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 bg-dashboard-card-border rounded-sm"></div>
        <span class="text-dashboard-text">No Change</span>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
/* Custom animations for bars */
.bar-animation {
  animation: barGrow 0.8s ease-out forwards;
}

@keyframes barGrow {
  from {
    height: 0%;
  }
  to {
    height: var(--bar-height);
  }
}

/* Hover effects */
.bar-hover:hover {
  transform: scaleY(1.05);
  transition: transform 0.2s ease-in-out;
}

/* Ensure bars are visible */
.bg-brand-color-default {
  background-color: #00aafe !important;
}

.bg-orange-default {
  background-color: #ff5e00 !important;
}

.bg-dashboard-card-border {
  background-color: #e6e9ef !important;
}
</style>
