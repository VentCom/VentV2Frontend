<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    block?: boolean;
    loading?: boolean;
    disabled?: boolean;
  }>(),
  {
    block: false,
    loading: false,
    disabled: false,
  }
);

const getProps = computed(() => props);
</script>
<template>
  <button
    class="bg-brand-color-default hover:bg-brand-color-005 cursor-pointer text-white py-3 px-6 text-center w-full transition-colors duration-500 ease-in-out"
    :class="{
      'w-full': getProps.block,
      'opacity-50 cursor-not-allowed': getProps.disabled,
    }"
    :disabled="getProps.disabled"
  >
    <slot></slot>
  </button>
</template>
