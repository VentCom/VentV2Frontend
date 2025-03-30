<script setup lang="ts">
import { TransactionSettlementsCard } from "#components";
</script>

<template>
  <div class="border border-dashboard-card-border p-6 grid grid-cols-1 gap-6">
    <p
      class="inline-block w-full md:w-auto font-semibold text-base md:text-xl capitalize"
    >
      Settlement Details
    </p>

    <TransactionSettlementsCard></TransactionSettlementsCard>
    <TransactionSettlementsCard></TransactionSettlementsCard>
  </div>
</template>
