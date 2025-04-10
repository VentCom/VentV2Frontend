<template>
  <div class="flex flex-col h-full overflow-y-auto">
    <h2
      class="text-dashboard-heading font-semibold text-xl md:text-2xl mb-10 border-b border-dashboard-card-border pb-5"
    >
      Comments
    </h2>

    <div class="">
      <TransactionCommentsCard
        v-for="count in 4"
        :key="count"
        :is-last="count === 4"
      ></TransactionCommentsCard>
    </div>
  </div>
</template>
