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
    name: "Account History",
    icon: "vent:story",
    id: "account-history",
  },
  {
    name: "Restrictions",
    icon: "vent:info-circle-outlined",
    id: "restrictions",
  },
];
</script>
<template>
  <div class="max-w-[90vw] md:max-w-[1600px]">
    <!-- tab -->
    <AppTab :defaultTabId="'summary'" :tabList="tabs" hasSidebar>
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

      <template #account-history>
        <div>
          <TransactionAccountHistory></TransactionAccountHistory>
        </div>
      </template>

      <template #restrictions>
        <div>
          <TransactionAccountHistory></TransactionAccountHistory>
        </div>
      </template>

      <template #sidebar>
        <div>
          <TransactionSummaryMoreActions></TransactionSummaryMoreActions>
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
