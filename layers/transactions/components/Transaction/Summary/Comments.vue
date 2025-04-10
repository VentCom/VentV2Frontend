<script setup lang="ts">
import { AppButton, AppCard, TransactionCommentsCard } from "#components";
</script>

<template>
  <AppCard>
    <template #header-left>
      <div class="flex items-center gap-2">
        <h3
          class="font-semibold text-dashboard-heading place-items-center pl-2"
        >
          Comments
        </h3>
        <span
          class="border border-dashboard-card-divider rounded-lg p-2 py-1 text-xs inline-block mb-1"
        >
          0
        </span>
      </div>
    </template>

    <template #header-right>
      <button
        class="hover:text-white bg-dashboard-bg text-[0.75rem] px-4 py-[11px] rounded-xl border border-dashboard-card-border hover:bg-brand-color-default text-dashboard-heading"
      >
        See all
      </button>
    </template>

    <template #body>
      <TransactionCommentsCard isLast></TransactionCommentsCard>
    </template>
  </AppCard>
</template>
