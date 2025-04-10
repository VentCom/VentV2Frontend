<script setup lang="ts">
import { AppAlertWarning2, TransactionSummaryMoreActions } from "#components";
</script>

<template>
  <div class="flex flex-col w-full gap-4">
    <!-- alerts -->
    <AppAlertWarning2></AppAlertWarning2>
    <AppAlertWarning></AppAlertWarning>
    <!-- alerts -->

    <!-- content -->
    <div class="w-full flex flex-col md:flex-row gap-4">
      <div class="w-full md:grow flex flex-col gap-4">
        <TransactionSummaryDetails></TransactionSummaryDetails>
      </div>

      <div class="w-full md:w-[423px] shrink-0 flex flex-col gap-4">
        <TransactionSummarySettlements></TransactionSummarySettlements>
        <TransactionSummaryComments></TransactionSummaryComments>
      </div>
    </div>
    <!-- content -->
  </div>
</template>
