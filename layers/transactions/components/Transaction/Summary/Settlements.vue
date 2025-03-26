<script setup lang="ts">
import { AppButton, AppPills, TransactionSettlementsCard } from "#components";
</script>

<template>
  <div
    class="border border-dashboard-card-border p-6 w-full flex flex-col gap-4"
  >
    <!-- heading -->
    <div
      class="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2"
    >
      <div class="grow w-full">
        <h3 class="font-semibold text-dashboard-heading text-xl mb-1">
          Settlements
        </h3>
        <p class="text-dashboard-text text-[0.813rem]">
          Finalize transaction by creating a settlement
        </p>
      </div>

      <div class="shrink-0 flex justify-end w-full md:w-auto">
        <AppButton> Create Settlement </AppButton>
      </div>
    </div>
    <!-- heading end -->

    <!-- Setllement list -->
    <TransactionSummarySettlementsCard
      v-for="(count, index) in 2"
      :key="index"
    ></TransactionSummarySettlementsCard>
    <!-- Setllement list end-->

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
</template>

<style scoped></style>
