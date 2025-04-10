<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    subCardCount?: number;
  }>(),
  {
    subCardCount: 1,
  }
);

const subCardCount = computed(() => props.subCardCount);
</script>
<template>
  <div
    class="border border-dashboard-card-border p-2 w-full bg-dashboard-bg-darker rounded-2xl flex flex-col gap-2"
  >
    <!-- header -->
    <div class="flex justify-between items-center">
      <slot name="header-left"></slot>

      <slot name="header-right"></slot>
    </div>
    <!-- header end -->

    <!-- body -->
    <div class="grid grid-cols-1 gap-2">
      <div
        v-for="(subCard, index) in subCardCount"
        :key="index"
        class="border border-dashboard-card-border rounded-[12px] bg-dashboard-bg p-6 md:p-11"
      >
        <slot name="body" :index="index"> </slot>
      </div>
    </div>
    <!-- body end-->
  </div>
</template>
