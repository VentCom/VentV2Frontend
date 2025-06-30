<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    heading?: string;
    data?: string;
    level?: number;
  }>(),
  {
    heading: "Worktime Summary",
    data: "0",
    level: 1,
  }
);
</script>
<template>
  <div class="w-full p-6 border border-dashboard-card-border rounded-[10px]">
    <!-- Stat heading -->
    <div class="flex gap-2 items-center">
      <h3 class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading">
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
    <div class="flex items-center justify-between md:justify-start gap-3 mt-6">
      <span
        class="text-[22px] font-bold text-dashboard-heading font-alternative"
      >
        {{ props.data }}
      </span>
    </div>
    <!-- Amount container end-->
  </div>
</template>
