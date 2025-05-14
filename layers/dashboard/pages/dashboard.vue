<script lang="ts" setup>
definePageMeta({
  layout: "dashboard",
  pageTransition: { name: "page-zoom", mode: "out-in" },
});
const { dashboardType } = useDashboardTypeHandler();
</script>
<template>
  <div>
    <SimpleDashboard
      v-if="dashboardType === DashboardType.SIMPLE"
    ></SimpleDashboard>
    <AdvancedDashbaord v-else></AdvancedDashbaord>

    <footer
      class="hidden md:flex items-center mt-5 border-t border-dashboard-card-border py-7.5 z-[20] justify-between sticky bottom-0 bg-white"
    >
      <p class="text-[0.813rem] text-dashboard-text font-medium">
        All Rights Reserved <span class="text-lg"> &copy;</span> 2025. Vent
        Africa
      </p>

      <AppDashboardSwitch></AppDashboardSwitch>
    </footer>
  </div>
</template>
