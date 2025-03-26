<template>
  <div
    class="border border-dashboard-card-border p-6 py-10 md:p-10 w-full grid grid-cols-1 gap-4"
  >
    <ul class="grid grid-cols-1">
      <TransactionLogActivitiesCard hasConnector></TransactionLogActivitiesCard>
      <TransactionLogActivitiesCard hasConnector></TransactionLogActivitiesCard>
      <TransactionLogActivitiesCard hasConnector></TransactionLogActivitiesCard>
      <TransactionLogActivitiesCard hasConnector></TransactionLogActivitiesCard>
      <TransactionLogActivitiesCard isLast></TransactionLogActivitiesCard>
    </ul>
  </div>
</template>
