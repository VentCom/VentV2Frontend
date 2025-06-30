<script setup lang="ts">
import DashCustomerStats from "./DashCustomerStats.vue";
import DashRevenueTrackerVariant from "./DashRevenueTrackerVariant.vue";
import DashSettlementStats from "./DashSettlementStats.vue";
import DashTradeStats from "./DashTradeStats.vue";
import DashTransactionVolumeVariant from "./DashTransactionVolumeVariant.vue";
import DashBusinessMetrics from "./DashBusinessMetrics.vue";
</script>

<template>
  <div class="text-dashboard-text">
    <!-- Heading -->
    <ul class="hidden md:flex items-center gap-3 mb-8">
      <li>
        <nuxt-link
          to="/settlements"
          class="text-dashboard-text-light font-semibold hover:underline px-4.5 rounded-[12px] border-dashboard-card-border border bg-dashboard-bg-darker py-4 transition-all duration-300 ease-in-out hover:bg-brand-color-013 hover:border-brand-color-default"
          >Settlements</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/dashboard"
          class="text-dashboard-text-light font-semibold hover:underline px-4.5 rounded-[12px] border-dashboard-card-border border bg-dashboard-bg-darker py-4 transition-all duration-300 ease-in-out hover:bg-brand-color-013 hover:border-brand-color-default"
          >Customers</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/dashboard"
          class="text-dashboard-text-light font-semibold hover:underline px-4.5 rounded-[12px] border-dashboard-card-border border bg-dashboard-bg-darker py-4 transition-all duration-300 ease-in-out hover:bg-brand-color-013 hover:border-brand-color-default"
          >Merchants</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/dashboard"
          class="text-dashboard-text-light font-semibold hover:underline px-4.5 rounded-[12px] border-dashboard-card-border border bg-dashboard-bg-darker py-4 transition-all duration-300 ease-in-out hover:bg-brand-color-013 hover:border-brand-color-default"
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
          <DashTransactionVolumeVariant></DashTransactionVolumeVariant>
          <DashCustomerStats></DashCustomerStats>
        </div>

        <DashTradeStats> </DashTradeStats>

        <div class="flex flex-col w-full gap-4">
          <DashSettlementStats></DashSettlementStats>
          <DashRevenueTrackerVariant></DashRevenueTrackerVariant>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Enhanced hover effects for navigation */
.nav-link {
  transition: all 0.3s ease-in-out;
}

.nav-link:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 170, 254, 0.15);
}

/* Responsive grid adjustments */
@media (max-width: 1024px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .nav-links {
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .nav-links li {
    flex: 1;
    min-width: 120px;
  }
}
</style>
