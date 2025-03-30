<script setup lang="ts">
import SettlementsList from "../../components/SettlementsList.vue";

definePageMeta({
  layout: "dashboard",
  pageTransition: { name: "page-zoom", mode: "out-in" },
});
</script>
<template>
  <div class="w-full flex flex-col gap-7">
    <div class="w-full">
      <SettlementOverview></SettlementOverview>
    </div>

    <div class="w-full">
      <SettlementsList></SettlementsList>
    </div>
  </div>
</template>
