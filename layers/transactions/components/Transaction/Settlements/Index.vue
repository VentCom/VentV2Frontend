<script setup lang="ts">
import { TransactionSettlementsCard } from "#components";

const collapseInfo = ref(true);

const toggleCollapsable = () => {
  collapseInfo.value = !collapseInfo.value;
};
</script>
<template>
  <div class="flex flex-col w-full gap-6">
    <!-- Total settlement detail -->
    <div
      class="w-full flex flex-col border border-dashboard-card-border p-6 gap-6"
    >
      <!-- single settlement -->
      <TransactionSettlementsCard
        v-for="(count, index) in 2"
        :key="index"
      ></TransactionSettlementsCard>
      <!-- single settlement end-->

      <!-- New settlement -->
      <div class="flex justify-end md:justify-start">
        <AppButton> Create Settlement </AppButton>
      </div>
      <!-- New settlement end-->

      <!-- Restrict settlement -->
      <div
        class="border-t border-dashboard-card-border pt-6 flex flex-col md:flex-row w-full items-center justify-between gap-4"
      >
        <ul class="grow w-full flex gap-2">
          <li class="shrink-0 pt-1">
            <Icon name="vent:warning" size="1.5rem"></Icon>
          </li>
          <li>
            <h3 class="font-semibold text-dashboard-heading text-base mb-1">
              Restrict Settlement
            </h3>
            <p class="text-dashboard-text text-[0.813rem]">
              Finalize transaction by creating a settlement
            </p>
          </li>
        </ul>

        <div class="shrink-0 flex justify-end w-full md:w-auto">
          <AppButton outlined> Add Restriction </AppButton>
        </div>
      </div>
      <!-- Restrict settlement end-->
    </div>
    <!-- Total settlement detail end -->

    <!-- more actions -->
    <TransactionSettlementsMoreActions></TransactionSettlementsMoreActions>
    <!-- more actions end -->
  </div>
</template>
