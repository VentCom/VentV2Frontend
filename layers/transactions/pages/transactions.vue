<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  pageTransition: { name: "page-zoom", mode: "out-in" },
});
</script>
<template>
  <div class="w-full flex flex-col gap-7">
    <div class="w-full">
      <TransactOverview></TransactOverview>
    </div>

    <div class="w-full">
      <TransactionList></TransactionList>
    </div>
  </div>
</template>
