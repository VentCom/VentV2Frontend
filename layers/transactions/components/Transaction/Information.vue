<script setup lang="ts">
import {
  AppTab,
  TransactionLogActivities,
  TransactionSummary,
} from "#components";
import type { TabsData } from "~/utils/types/misc/Tabs";

const tabs: TabsData[] = [
  {
    name: "Summary",
    icon: "vent:star",
    id: "summary",
  },
  {
    name: "Transaction Details",
    icon: "vent:dollar-square",
    id: "transaction-details",
  },
  {
    name: "Settlements",
    icon: "vent:bank",
    id: "settlement",
  },
  {
    name: "Comments",
    icon: "vent:sms",
    id: "comments",
  },
  {
    name: "Log Activities",
    icon: "vent:story",
    id: "log-activities",
  },
];
</script>
<template>
  <div class="max-w-[90vw] md:max-w-[1600px]">
    <!-- tab -->
    <AppTab :defaultTabId="'summary'" :tabList="tabs">
      <template #summary>
        <div>
          <TransactionSummary></TransactionSummary>
        </div>
      </template>

      <template #transaction-details>
        <div>
          <TransactionDetails></TransactionDetails>
        </div>
      </template>

      <template #settlement>
        <div>
          <TransactionSettlements></TransactionSettlements>
        </div>
      </template>

      <template #comments>
        <div>
          <TransactionComments></TransactionComments>
        </div>
      </template>

      <template #log-activities>
        <div>
          <TransactionLogActivities></TransactionLogActivities>
        </div>
      </template>
    </AppTab>
    <!-- tab end -->
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
