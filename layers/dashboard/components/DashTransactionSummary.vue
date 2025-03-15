<script lang="ts" setup>
type TransactionStats = {
  completed: number;
  pending: number;
  unconfirmed: number;
  post_no_debit: number;
};

type AssetData = {
  name: string;
  statistics: TransactionStats;
};

type TotalStatistics = {
  name: string;
  count: number;
  color: string;
  hasDivider: boolean;
};

const assets = ref<AssetData[]>([
  {
    name: "Bitcoin (BTC)",
    statistics: {
      pending: 40,
      completed: 15,
      unconfirmed: 5,
      post_no_debit: 40,
    },
  },
  {
    name: "USDT (TRC20)",
    statistics: {
      pending: 20,
      completed: 40,
      unconfirmed: 15,
      post_no_debit: 25,
    },
  },
  {
    name: "Solana (SOL)",
    statistics: {
      pending: 40,
      completed: 20,
      unconfirmed: 25,
      post_no_debit: 15,
    },
  },
]);

const totalStatistics = ref<TotalStatistics[]>([
  {
    name: "Pending",
    count: 40,
    color: "bg-orange-default",
    hasDivider: true,
  },
  {
    name: "Completed",
    count: 15,
    color: "bg-gray-001",
    hasDivider: false,
  },
  {
    name: "Unconfirmed",
    count: 5,
    color: "bg-brand-color-default",
    hasDivider: true,
  },
  {
    name: "Post-no-debit",
    count: 5,
    color: "bg-gray-010",
    hasDivider: false,
  },
]);

const dividerIsEven = (index: number): boolean => {
  return (index + 1) % 2 === 0;
};
const dividerIsNotLast = (index: number, dataCount: number): boolean => {
  return index !== dataCount - 1;
};
</script>
<template>
  <div class="border border-dashboard-card-border rounded-xl">
    <div
      class="p-6 pb-3 border-b border-dashboard-card-border grid grid-cols-1 gap-11"
    >
      <!-- Heading -->
      <div class="">
        <h2 class="font-bold text-dashboard-heading mb-1 text-base md:text-xl">
          Transaction Summary
        </h2>
        <p class="text-[0.813rem]">
          Your summary provides a comprehensive view of VENT Inc.'s business
          activities across all product lines.
        </p>
      </div>
      <!-- Heading end -->

      <!-- Assets Stats-->
      <div class="flex flex-col items-start gap-6">
        <ul
          class="w-full flex justify-between gap-2"
          v-for="(asset, index) in assets"
          :key="index"
        >
          <li class="w-full text-[0.813rem] text-dashboard-heading">
            {{ asset.name }}
          </li>
          <li class="w-[60%] md:w-[80%] shrink-0 flex gap-1">
            <!-- Completed -->
            <progress
              class="inline-block p-1 py-2.5 transition-all duration-300 ease-in-out bg-gray-001 rounded-sm"
              :style="{
                width: `${asset.statistics.completed}%`,
              }"
              max="100"
              :value="asset.statistics.completed"
            ></progress>
            <!-- Completed end -->

            <!-- Pending -->
            <progress
              class="inline-block p-1 py-2.5 transition-all duration-300 ease-in-out bg-orange-default rounded-sm"
              :style="{
                width: `${asset.statistics.pending}%`,
              }"
              max="100"
              :value="asset.statistics.pending"
            ></progress>
            <!-- Pending end -->

            <!-- Unconfirmed -->
            <progress
              class="inline-block p-1 py-2.5 transition-all duration-300 ease-in-out bg-brand-color-default rounded-sm"
              :style="{
                width: `${asset.statistics.unconfirmed}%`,
              }"
              max="100"
              :value="asset.statistics.unconfirmed"
            ></progress>
            <!-- Unconfirmed end -->

            <!-- Post No Debit -->
            <progress
              class="inline-block p-1 py-2.5 transition-all duration-300 ease-in-out bg-gray-010 rounded-sm"
              :style="{
                width: `${asset.statistics.post_no_debit}%`,
              }"
              max="100"
              :value="asset.statistics.post_no_debit"
            ></progress>
            <!-- Post No Debit end -->
          </li>
        </ul>
      </div>
      <!-- Assets Stats end-->

      <!-- transaction count -->
      <div
        class="flex items-center justify-between flex-wrap md:flex-nowrap gap-4 mt-5"
      >
        <span
          class="flex-shrink-0 font-semibold text-xl md:text-[3rem] text-dashboard-heading"
          >51%
        </span>

        <div
          class="w-[80%] md:w-full md:flex-grow text-dashboard-text text-xs md:text-[0.813rem]"
        >
          Of the day's transactional volume have successfully been completed by
          two Admins who commenced their shifts earlier prior to yours.
        </div>

        <div class="shrink-0 w-full md:w-auto">
          <button
            class="cursor-pointer flex gap-2 items-center rounded-full py-3 px-4 text-dashboard-heading bg-gray-011 border border-gray-009 uppercase text-sm font-bold hover:border-brand-color-default transition-all duration-300 ease-in-out shadow shadow-transparent hover:shadow-brand-color-009/50"
          >
            <span> All </span>
            <i class="w-4 block aspect-square overflow-hidden">
              <Icon name="vent:arrow-down" size="1rem"></Icon>
            </i>
          </button>
        </div>
      </div>
      <!-- transaction count end -->
    </div>

    <!-- Legend -->
    <div class="p-6">
      <ul class="flex items-stretch flex-wrap md:flex-nowrap gap-4">
        <template v-for="(stat, index) in totalStatistics" :key="index">
          <li class="flex flex-col items-start gap-2 w-[40%] md:w-[25%]">
            <i
              class="block w-2 aspect-square rounded-full"
              :class="[stat.color]"
            ></i>

            <h3
              class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading"
            >
              {{ stat.name }}
            </h3>

            <span class="font-bold text-dashboard-heading text-sm">
              {{ stat.count }}
            </span>
          </li>

          <div
            class="last:hidden divider-vertical"
            :class="{
              'hidden md:inline-block': !stat.hasDivider,
            }"
          ></div>
          <div
            v-if="dividerIsEven(index) && dividerIsNotLast(index, 4)"
            class="divider-horizontal md:hidden"
          ></div>
        </template>
      </ul>
    </div>
    <!-- Legend end-->
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.divider-horizontal {
  @apply bg-dashboard-card-border w-full h-0.5;
  border-radius: 100%;
}
.divider-vertical {
  @apply bg-dashboard-card-border h-auto w-0.5;
  border-radius: 100%;
}
</style>
