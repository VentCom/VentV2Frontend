<script setup lang="ts">
import DashCustomerStats from "./DashCustomerStats.vue";
import DashRevenueTracker from "./DashRevenueTracker.vue";
import DashSettlementStats from "./DashSettlementStats.vue";
import DashTradeStats from "./DashTradeStats.vue";
</script>

<template>
  <div class="text-dashboard-text">
    <!-- Heading -->
    <ul class="hidden md:flex items-center gap-3 mb-8">
      <li>
        <nuxt-link
          to="/settlements"
          class="text-dashboard-text-light font-semibold hover:underline px-4.5 rounded-[12px] border-dashboard-card-border border bg-dashboard-bg-darker py-4"
          >Settlements</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/dashboard"
          class="text-dashboard-text-light font-semibold hover:underline px-4.5 rounded-[12px] border-dashboard-card-border border bg-dashboard-bg-darker py-4"
          >Customers</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/dashboard"
          class="text-dashboard-text-light font-semibold hover:underline px-4.5 rounded-[12px] border-dashboard-card-border border bg-dashboard-bg-darker py-4"
          >Merchants</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/dashboard"
          class="text-dashboard-text-light font-semibold hover:underline px-4.5 rounded-[12px] border-dashboard-card-border border bg-dashboard-bg-darker py-4"
          >Reports</nuxt-link
        >
      </li>
    </ul>
    <!-- Heading end-->

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5.5 mt-5.5">
      <!-- Business metrics -->
      <DashBusinessMetrics></DashBusinessMetrics>
      <!-- Business metrics end-->

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:col-span-2">
        <div class="flex flex-col w-full gap-4">
          <DashTransactionVolume></DashTransactionVolume>
          <DashCustomerStats></DashCustomerStats>
        </div>

        <DashTradeStats> </DashTradeStats>

        <div class="flex flex-col w-full gap-4">
          <DashSettlementStats></DashSettlementStats>
          <DashRevenueTracker></DashRevenueTracker>
        </div>
      </div>
    </div>
  </div>
</template>
