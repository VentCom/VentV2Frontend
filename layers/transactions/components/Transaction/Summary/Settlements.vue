<script setup lang="ts">
const createSettlement = ref({
  showDialogBox: () => {},
  hideDialogBox: () => {},
});
</script>

<template>
  <Teleport to="body">
    <AppModal ref="createSettlement">
      <TransactionModalsCreateSettlement></TransactionModalsCreateSettlement>
    </AppModal>
  </Teleport>

  <AppCard :subCardCount="2">
    <template #header-left>
      <h3 class="font-semibold text-dashboard-heading place-items-center pl-2">
        Settlements
      </h3>
    </template>

    <template #header-right>
      <button
        @click="createSettlement.showDialogBox()"
        class="text-brand-color-default bg-dashboard-bg text-[0.75rem] px-4 py-[11px] rounded-xl border border-brand-color-default hover:bg-brand-color-default hover:text-dashboard-bg"
      >
        Create
      </button>
    </template>

    <template #body="{ index }">
      <div class="grid grid-cols-1 gap-11">
        <!-- Setllement list -->
        <TransactionSummarySettlementCard
          :key="index"
        ></TransactionSummarySettlementCard>
        <!-- Setllement list end-->
      </div>
    </template>
  </AppCard>
</template>

<style scoped></style>
