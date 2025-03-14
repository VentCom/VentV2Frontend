<script lang="ts" setup>
definePageMeta({
  layout: "dashboard",
});
</script>
<template>
  <div class="text-dashboard-text">
    <!-- Heading -->
    <div>
      <h1 class="text-xl md:text-2xl font-heading text-dashboard-heading">
        👋 Hi Ruben, Great to See You Again!
      </h1>
      <p class="text-[0.813rem]">
        Thursday's
        <span class="text-dashboard-heading">transactional</span> tide has
        rolled in, how set are you to get things done
        <span class="text-dashboard-heading">with accuracy and speed</span> of
        an eagle?
      </p>
    </div>
    <!-- Heading end-->

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5.5 mt-5.5">
      <!-- Business metrics -->
      <DashBusinessMetrics></DashBusinessMetrics>
      <!-- Business metrics end-->

      <DashTransactionSummary></DashTransactionSummary>
    </div>
  </div>
</template>
