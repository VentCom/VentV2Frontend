<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    block?: boolean;
    loading?: boolean;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    outlined?: boolean;
  }>(),
  {
    block: false,
    loading: false,
    disabled: false,
    size: "md",
    outlined: false,
  }
);

const getProps = computed(() => props);
</script>
<template>
  <button
    class="btn"
    :class="{
      'w-full': getProps.block,
      'brightness-75 cursor-not-allowed': getProps.disabled,
      'btn-sm': getProps.size === 'sm',
      'btn-md': getProps.size === 'md',
      'btn-lg': getProps.size === 'lg',
      'btn-primary': !getProps.outlined,
      'btn-primary-outlined': getProps.outlined,
    }"
    :disabled="getProps.disabled"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.btn {
  @apply cursor-pointer flex gap-2 items-center justify-center py-3 px-6 text-center transition-colors duration-500 ease-in-out;
}

.btn-sm {
  @apply text-sm;
}

.btn-md {
  @apply text-base;
}

.btn-lg {
  @apply text-lg;
}

.btn-primary {
  @apply bg-brand-color-default hover:bg-brand-color-005 text-white;
}

.btn-primary-outlined {
  @apply bg-transparent border border-brand-color-default text-brand-color-default hover:border-brand-color-005 hover:text-brand-color-005;
}
</style>
