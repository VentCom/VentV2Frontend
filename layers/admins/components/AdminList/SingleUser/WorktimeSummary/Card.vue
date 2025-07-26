<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    heading?: string;
    level?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  }>(),
  {
    heading: "Worktime Summary",
    level: 1,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }
);
</script>
<template>
  <div
    class="w-full p-4 border border-dashboard-card-border rounded-[10px] bg-white"
  >
    <!-- Stat heading -->
    <div class="flex gap-2 items-center mb-2">
      <h3
        class="text-[8px] uppercase tracking-widest text-dropdown-heading whitespace-nowrap"
      >
        {{ props.heading }}
      </h3>

      <!-- Stat level -->
      <ul class="flex items-center gap-1">
        <li
          class="block w-[5px] aspect-square rounded-full"
          v-for="(count, index) in 3"
          :key="index"
          :class="{
            'bg-brand-color-007': props.level >= count,
            'bg-dashboard-text-light': props.level < count,
          }"
        ></li>
      </ul>
      <!-- Stat level end-->
    </div>
    <!-- Stat heading end-->

    <!-- Amount container -->
    <div class="flex items-center justify-between md:justify-start gap-3">
      <span
        class="text-[17px] md:text-[18px] font-medium text-dashboard-heading font-alternative"
      >
        {{ props.hours }}
        <span class="uppercase text-[12px] font-normal">h</span> :
        {{ props.minutes }}
        <span class="uppercase text-[12px] font-normal">m</span> :
        {{ props.seconds }}
        <span class="uppercase text-[12px] font-normal">s</span>
      </span>
    </div>
    <!-- Amount container end-->
  </div>
</template>
