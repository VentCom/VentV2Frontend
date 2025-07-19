<script setup lang="ts">
const props = withDefaults(defineProps<{ name?: string; icon?: string }>(), {
  name: "Phone",
  icon: "vent:call",
});
</script>
<template>
  <div class="flex justify-between w-full items-center gap-2">
    <div
      class="flex gap-2 text-dashboard-text-light items-center text-[13px] shrink-0"
    >
      <Icon :name="props.icon" size="17px"></Icon>
      <p>{{ props.name }}</p>
    </div>

    <div class="text-dashboard-heading text-[13px] text-right">
      <slot> exa***le@email.com </slot>
    </div>
  </div>
</template>
