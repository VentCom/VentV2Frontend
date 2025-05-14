<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    description: string;
    permissions: string[];
  }>(),
  {
    title: "",
    description: "",
    permissions: () => [],
  }
);
</script>
<template>
  <div class="border border-dashboard-card-border">
    <div
      class="p-5 md:p-10 flex flex-col md:flex-row gap-5 items-start justify-between"
    >
      <div class="w-full md:w-[358px]">
        <h2 class="text-dashboard-heading font-semibold text-xl pb-2">
          {{ props.title }}
        </h2>
        <p class="text-xs md:text-base text-dashboard-text">
          {{ props.description }}
        </p>
      </div>

      <div class="w-full md:w-1/2 grid grid-cols-1 gap-4">
        <ul class="grid grid-cols-1 w-full gap-5">
          <li
            v-for="(permission, index) in props.permissions"
            :key="index"
            class="flex gap-3"
          >
            <icon
              name="vent:double-check"
              size="0.9rem"
              class="text-brand-color-default"
            ></icon>
            <span class="text-dashboard-text text-sm"> {{ permission }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
