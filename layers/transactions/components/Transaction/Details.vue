<script setup lang="ts">
import { TransactionSummary } from "#components";

const tabs = [
  {
    name: "Summary",
    icon: "vent:star",
  },
  {
    name: "Transaction Details",
    icon: "vent:dollar-square",
  },
  {
    name: "Settlements",
    icon: "vent:bank",
  },
  {
    name: "Log Activities",
    icon: "vent:story",
  },
  {
    name: "Comments",
    icon: "vent:sms",
  },
];
</script>
<template>
  <div class="max-w-[90vw]">
    <!-- tab heading -->
    <ul
      class="inline-flex items-center w-full gap-5 border-b min-w-0 border-dashboard-card-border overflow-x-auto snap-x"
    >
      <template v-for="(tab, index) in tabs" :key="index">
        <li class="inline-block max-w-40 min-w-9 shrink-0">
          <button
            class="flex items-center gap-2 border-b-2 border-transparent pb-2 text-dashboard-text group hover:border-brand-color-default cursor-pointer"
          >
            <i class="group-hover:text-brand-color-default">
              <Icon :name="tab.icon" size="1.2rem"></Icon>
            </i>
            <span
              class="inline-block pr-2 mb-1.5 text-sm md:text-base whitespace-nowrap group-hover:text-dashboard-heading"
            >
              {{ tab.name }}
            </span>
          </button>
        </li>
        <li class="divider-vertical"></li>
      </template>
    </ul>
    <!-- tab heading end-->

    <!-- tab body -->
    <div class="w-full mt-4">
      <!-- Summary -->
      <TransactionSummary></TransactionSummary>
      <!-- Summary end -->
    </div>
    <!-- tab body end -->
  </div>
</template>
<style scoped>
@reference "~/assets/css/main.css";

.divider-horizontal {
  @apply bg-dashboard-card-border w-full h-0.5;
  border-radius: 100%;
}

.divider-vertical {
  @apply bg-dashboard-card-border h-4 mb-3 w-0.5;
  border-radius: 100%;
}
</style>
