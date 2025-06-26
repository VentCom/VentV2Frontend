<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    color?: "blue" | "green" | "red" | "orange" | "yellow";
    hasTick?: boolean;
  }>(),
  {
    color: "blue",
    hasTick: false,
  }
);

const getProps = computed(() => props);
</script>
<template>
  <span
    class="px-2.5 py-[3px] rounded-full inline-flex gap-2 items-center"
    :class="getProps.color"
  >
    <span
      v-if="getProps.hasTick"
      class="block w-2 border border-black aspect-square rounded-full tick"
    ></span>
    <slot></slot>
  </span>
</template>

<style scoped>
@reference "~/assets/css/main.css";
.blue {
  @apply bg-brand-color-012 text-brand-color-default;
}
.blue .tick {
  @apply bg-brand-color-default;
}

.green {
  @apply bg-green-014 text-[#00CC2F];
}

.green .tick {
  @apply bg-green-005;
}

.red {
  @apply bg-red-100 text-red-400;
}

.red .tick {
  @apply bg-red-400;
}

.orange {
  @apply bg-orange-013 text-orange-default;
}
.yellow {
  @apply bg-yellow-013 text-[#FF9E05];
}
</style>
