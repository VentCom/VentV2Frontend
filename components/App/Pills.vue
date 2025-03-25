<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    color?: "blue" | "green" | "red" | "orange" | "yellow";
  }>(),
  {
    color: "blue",
  }
);

const getProps = computed(() => props);
</script>
<template>
  <span class="px-2.5 py-0.5 rounded-full inline-block" :class="getProps.color">
    <slot></slot>
  </span>
</template>

<style scoped>
@reference "~/assets/css/main.css";
.blue {
  @apply bg-brand-color-012 text-brand-color-default;
}
.green {
  @apply bg-green-014 text-green-005;
}
.red {
  @apply bg-green-014 text-green-005;
}
.orange {
  @apply bg-orange-013 text-orange-default;
}
.yellow {
  @apply bg-yellow-013 text-[#FF9E05];
}
</style>
