<script lang="ts" setup>
type BusinessStatsData = {
  name: string;
  amount: string;
  percentage: number;
  percentageBgColor: string;
  percentageSecondaryColor: string;
  percentageTextColor: string;
  levelColor: string;
};

const stats = ref<BusinessStatsData[]>([
  {
    amount: "0.0",
    name: "Total Banks",
    percentage: 5.1,
    percentageBgColor: "#00FF3B",
    percentageSecondaryColor: "#FFF700",
    percentageTextColor: "#000000",
    levelColor: "bg-stat-level-1",
  },
  {
    amount: "0.0",
    name: "Active Banks",
    percentage: 5.1,
    percentageBgColor: "#FFF700",
    percentageSecondaryColor: "#FF55F9",
    percentageTextColor: "#000000",
    levelColor: "bg-stat-level-2",
  },
  {
    amount: "0.0",
    name: "Inactive Banks",
    percentage: 5.1,
    percentageBgColor: "#FF5E00",
    percentageSecondaryColor: "#00FF3B",
    percentageTextColor: "#FFFFFF",
    levelColor: "bg-stat-level-2",
  },
  {
    amount: "0.0",
    name: "Total Payouts",
    percentage: 5.1,
    percentageBgColor: "#00AAFE",
    percentageSecondaryColor: "#00FF3B",
    percentageTextColor: "#ffffff",
    levelColor: "bg-stat-level-1",
  },
]);

const setLevelColor = (stat: BusinessStatsData, level: number = 0): string => {
  if (stat.percentage > level * 33.3) {
    return stat.levelColor;
  }
  return "bg-business-stat-level";
};
</script>
<template>
  <div
    class="md:col-span-2 border border-dashboard-card-border rounded-xl p-6 grid grid-cols-1 gap-11"
  >
    <!-- Heading -->
    <div
      class="border-b border-dashboard-card-divider pb-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between"
    >
      <div class="w-full">
        <h2 class="font-bold text-dashboard-heading mb-1 text-base md:text-xl">
          Banks Summary
        </h2>
        <p class="text-[0.813rem]">
          Your Banks Summary provides a detailed overview of operational banks.
        </p>
      </div>

      <div class="w-full md:inline-block md:w-auto shrink-0">
        <AppButton> Add Bank </AppButton>
      </div>
    </div>
    <!-- Heading end -->

    <div class="flex flex-col md:flex-row w-full gap-6">
      <template v-for="(stat, index) in stats" :key="index">
        <div class="w-full md:1/4">
          <!-- Stat heading -->
          <div class="flex gap-2 items-center">
            <h3
              class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading"
            >
              {{ stat.name }}
            </h3>

            <!-- Stat level -->
            <ul class="flex items-center gap-1">
              <li
                class="block w-[5px] aspect-square rounded-full"
                v-for="(count, index) in 3"
                :key="index"
                :class="[setLevelColor(stat, index)]"
              ></li>
            </ul>
            <!-- Stat level end-->
          </div>
          <!-- Stat heading end-->

          <!-- Amount container -->
          <div class="flex items-center justify-between md:justify-start gap-3">
            <span>
              <sup
                class="text-xl font-bold text-business-stat-currency font-alternative"
                >$</sup
              >
              <span
                class="text-[2.5rem] font-bold text-dashboard-heading font-alternative"
              >
                {{ stat.amount }}
              </span>
            </span>

            <span
              class="inline-flex gap-1 items-center px-3 rounded-full border-2 border-business-stat-border h-9 text-[0.813rem] font-bold"
              :style="{
                backgroundColor: stat.percentageBgColor,
                color: stat.percentageTextColor,
              }"
            >
              <i
                class="block w-[8px] aspect-square rounded-full border border-black"
                :style="{
                  backgroundColor: stat.percentageSecondaryColor,
                }"
              ></i>
              <span> +{{ stat.percentage }}% </span>
            </span>
          </div>
          <!-- Amount container end-->
        </div>

        <template v-if="index !== stats.length - 1">
          <!-- divider -->
          <div class="hidden md:block divider-vertical"></div>
          <div class="divider-horizontal md:hidden"></div>
          <!-- divider end-->
        </template>
      </template>
    </div>
  </div>
</template>
<style scoped>
@reference "~/assets/css/main.css";

.divider-horizontal {
  @apply bg-dashboard-card-border w-full h-0.5;
  border-radius: 100%;
}
.divider-vertical {
  @apply bg-dashboard-card-border h-auto w-1.5;
  border-radius: 100%;
}
</style>
