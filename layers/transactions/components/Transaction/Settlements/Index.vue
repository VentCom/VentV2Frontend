<script setup lang="ts">
import { TransactionSettlementsCard } from "#components";

const collapseInfo = ref(true);

const toggleCollapsable = () => {
  collapseInfo.value = !collapseInfo.value;
};
</script>
<template>
  <AppCard :subCardCount="2">
    <template #header-left>
      <h3 class="font-semibold text-dashboard-heading place-items-center pl-2">
        Settlements
      </h3>
    </template>

    <template #header-right>
      <button
        class="text-brand-color-default bg-dashboard-bg text-[0.75rem] px-4 py-[11px] rounded-xl border border-brand-color-default hover:bg-brand-color-default hover:text-dashboard-bg"
      >
        Create
      </button>
    </template>

    <template #body="{ index }">
      <div class="grid grid-cols-1 gap-11">
        <!-- Setllement list -->
        <TransactionSettlementsCard :key="index"></TransactionSettlementsCard>
        <!-- Setllement list end-->
      </div>
    </template>
  </AppCard>
</template>
