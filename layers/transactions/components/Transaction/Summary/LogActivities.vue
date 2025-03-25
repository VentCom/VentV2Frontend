<script setup lang="ts">
import { TransactionLogActivitiesCard } from "#components";

const collapseInfo = ref(true);

const toggleCollapsable = () => {
  collapseInfo.value = !collapseInfo.value;
};
</script>

<template>
  <div
    class="border border-dashboard-card-border p-6 py-10 md:p-10 w-full grid grid-cols-1 gap-4"
  >
    <!-- heading -->
    <div class="flex items-center justify-between">
      <!-- heading -->
      <h3 class="font-semibold text-dashboard-heading text-xl mb-1">
        Log Activities
      </h3>
      <!-- heading end-->

      <button
        class="shrink-0 text-dashboard-heading text-[0.813rem] border cursor-pointer border-dashboard-card-border rounded-full py-2 px-4.5 hover:shadow-2xl hover:shadow-brand-color-010 hover:border-brand-color-default transition-all duration-300 ease-in-out"
        @click="toggleCollapsable"
      >
        {{ collapseInfo ? "See more" : "See less" }}
      </button>
    </div>
    <!-- heading end-->

    <!-- body -->
    <div
      class="border border-dashboard-card-border p-4 pb-0 md:pb-0 md:p-11 collapsable"
      :class="{
        show: !collapseInfo,
      }"
    >
      <ul>
        <TransactionLogActivitiesCard></TransactionLogActivitiesCard>
      </ul>
      <ul class="grid grid-cols-1 overflow-hidden">
        <TransactionLogActivitiesCard></TransactionLogActivitiesCard>
        <TransactionLogActivitiesCard></TransactionLogActivitiesCard>
      </ul>
    </div>
    <!-- body end-->
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.collapsable {
  display: grid;
  grid-template-rows: auto 0fr;
  grid-template-columns: 1fr;
  transition: grid-template-rows 0.3s ease;
  overflow: hidden;
}

.collapsable.show {
  grid-template-rows: auto 1fr !important;
}

.collapsible-content {
  overflow: hidden;
}
</style>
