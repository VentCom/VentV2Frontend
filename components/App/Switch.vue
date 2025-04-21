<script setup lang="ts">
const isSelected = defineModel<boolean>("isSelected", { default: false });
const props = withDefaults(defineProps<{ id?: string }>(), {
  id: "",
});
</script>
<template>
  <label
    role="checkbox"
    class="block w-[33px] p-1.5 rounded-full overflow-hidden cursor-pointer relative"
    :for="props.id"
  >
    <input
      type="checkbox"
      v-model="isSelected"
      name=""
      :id="props.id"
      class="sr-only peer"
    />
    <span
      class="block absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out bg-dashboard-header-border peer-checked:bg-brand-color-default"
    >
    </span>
    <span
      class="rounded-full relative z-1 bg-white w-[14px] aspect-square block transition-all duration-300 ease-in-out peer-checked:translate-x-[0] translate-x-[50%]"
    >
    </span>
  </label>
</template>
