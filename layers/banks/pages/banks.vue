<script setup lang="ts">
import BankDatabase from "../components/BankDatabase.vue";

definePageMeta({
  layout: "dashboard",
  pageTransition: { name: "page-zoom", mode: "out-in" },
});
</script>
<template>
  <div class="flex flex-col w-full gap-7">
    <div class="w-full">
      <BankSummary></BankSummary>
    </div>

    <div class="w-full">
      <BankDatabase></BankDatabase>
    </div>
  </div>
</template>
