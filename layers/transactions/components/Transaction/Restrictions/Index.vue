<template>
  <AppCard>
    <template #header-left>
      <h3
        class="font-semibold text-dashboard-heading place-items-center pl-2 py-2"
      >
        Account History
      </h3>
    </template>

    <template #body>
      <div class="grid grid-cols-1 gap-6 w-full">
        <TransactionRestrictionsCard hasConnector></TransactionRestrictionsCard>
        <TransactionRestrictionsCard isLast></TransactionRestrictionsCard>
      </div>
    </template>
  </AppCard>
</template>
