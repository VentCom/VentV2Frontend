<script setup lang="ts">
const { dashboardType } = useDashboardTypeHandler();

const handleDashboardSwitch = () => {
  scrollTo({ top: 0, behavior: "smooth" });
};
</script>
<template>
  <ul class="flex gap-2 items-center">
    <li>
      <label
        class="flex items-center gap-2 relative p-1 text-[0.813rem] cursor-pointer pr-3 group"
        tabindex="0"
        @click="handleDashboardSwitch"
      >
        <input
          type="radio"
          v-model="dashboardType"
          name="dashboard_mode"
          :value="DashboardType.SIMPLE"
          class="sr-only peer"
        />
        <span
          class="border border-dashboard-card-divider absolute top-0 left-0 w-full h-full rounded-[8px] group-hover:border-brand-color-default peer-checked:border-brand-color-default"
        >
        </span>
        <i
          class="flex items-center justify-center w-[22px] h-[18px] border border-dashboard-card-divider rounded-[8px] bg-gray-009 text-dashboard-heading group-hover:border-brand-color-default group-hover:bg-brand-color-default group-hover:text-white peer-checked:border-brand-color-default peer-checked:bg-brand-color-default peer-checked:text-white"
        >
          <Icon name="vent:element" size="0.7rem" class="" />
        </i>
        <p class="text-dashboard-heading">Simple</p>
      </label>
    </li>

    <li class="border-l block border-dashboard-card-border h-full"></li>

    <li>
      <label
        @click="handleDashboardSwitch"
        class="flex items-center gap-2 relative p-1 text-[0.813rem] cursor-pointer pr-3 group"
        tabindex="0"
      >
        <input
          type="radio"
          name="dashboard_mode"
          v-model="dashboardType"
          :value="DashboardType.ADVANCED"
          class="sr-only peer"
        />
        <span
          class="border border-dashboard-card-divider absolute top-0 left-0 w-full h-full rounded-[8px] group-hover:border-brand-color-default peer-checked:border-brand-color-default"
        >
        </span>
        <i
          class="flex items-center justify-center w-[22px] h-[18px] border border-dashboard-card-divider rounded-[8px] bg-gray-009 text-dashboard-heading group-hover:border-brand-color-default group-hover:bg-brand-color-default group-hover:text-white peer-checked:border-brand-color-default peer-checked:bg-brand-color-default peer-checked:text-white"
        >
          <Icon name="vent:radar" size="0.7rem" class="" />
        </i>
        <p class="text-dashboard-heading">Advanced</p>
      </label>
    </li>
  </ul>
</template>
