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
  </div>
</template>
