<template>
  <div
    class="border border-dashboard-card-border p-6 w-full flex flex-col gap-4"
  >
    <!-- Chat content -->
    <div class="border border-dashboard-card-border p-6 md:p-8">
      <TransactionCommentsCard hasConnector></TransactionCommentsCard>
      <TransactionCommentsCard isLast></TransactionCommentsCard>
    </div>
    <!-- Chat content end-->
  </div>
</template>
