<script setup lang="ts">
import { TransactionSettlementsCard } from "#components";
</script>

<template>
  <AppCard :subCardCount="3">
    <template #header-left>
      <p
        class="inline-block w-full md:w-auto font-semibold text-base md:text-xl capitalize py-2 pl-2"
      >
        Settlements
      </p>
    </template>

    <template #body="{ index }">
      <SettlementCard :key="index"></SettlementCard>
    </template>
  </AppCard>
</template>
