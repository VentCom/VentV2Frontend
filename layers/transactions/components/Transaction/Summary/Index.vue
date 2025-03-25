<script setup lang="ts">
import { TransactionSummaryMoreActions } from "#components";
</script>

<template>
  <div class="flex flex-col w-full gap-4">
    <!-- alerts -->
    <div
      class="p-6 bg-rose-010 gap-2 flex items-center overflow-hidden relative"
    >
      <i class="shrink-0">
        <icon name="vent:warning-2" size="1.4rem"></icon>
      </i>
      <p class="text-black text-sm md:text-base relative z-1">
        This is a restriction to keep this user informed on what to do and what
        not to do.
      </p>

      <img
        src="/img/warning_message_2.svg"
        class="absolute w-35 md:w-40 -right-30 md:right-0 bottom-0 md:-bottom-7"
        alt=""
      />
    </div>

    <div
      class="p-6 bg-yellow-013 gap-2 flex items-center overflow-hidden relative"
    >
      <i class="shrink-0">
        <icon name="vent:info-circle" size="1.4rem"></icon>
      </i>
      <p class="text-black text-sm md:text-base relative z-1">
        This is an information text to keep this user informed on what to do and
        what not to do.
      </p>

      <img
        src="/img/warning_message_1.svg"
        class="absolute w-35 md:w-40 -right-30 md:right-0 bottom-0 md:-bottom-7"
        alt=""
      />
    </div>
    <!-- alerts -->

    <!-- content -->
    <div class="w-full flex flex-col md:flex-row gap-4">
      <div class="w-full md:grow flex flex-col gap-4">
        <TransactionSummaryDetails></TransactionSummaryDetails>
        <TransactionSummaryMoreActions></TransactionSummaryMoreActions>
        <TransactionSummaryLogActivities></TransactionSummaryLogActivities>
      </div>

      <div class="w-full md:w-[553px] shrink-0 flex flex-col gap-4">
        <TransactionSummarySettlements></TransactionSummarySettlements>
        <TransactionSummaryComments></TransactionSummaryComments>
      </div>
    </div>
    <!-- content -->
  </div>
</template>
