<script setup lang="ts">
const props = defineProps<{ text?: string; icon?: string }>();

const text = computed(() => {
  return props.text;
});
const copyToClipboard = () => {
  navigator.clipboard.writeText(text.value || "");
};
</script>
<template>
  <div
    class="flex items-center gap-1 justify-center group text-sm md:text-base text-dashboard-heading"
  >
    <span class="text-xs md:text-sm"> {{ text }} </span>
    <button
      @click="copyToClipboard"
      class="inline-block mt-1 group-hover:text-brand-color-default text-dashboard-text-light"
    >
      <Icon name="vent:copy" size="1.2rem"></Icon>
    </button>
  </div>
</template>
