<script setup lang="ts">
const props = withDefaults(
  defineProps<{ color?: "blue" | "yellow" | "rose"; count: number }>(),
  {
    color: "blue",
    count: 1,
  }
);
</script>
<template>
  <div
    class="flex items-center gap-4 p-4 rounded-[12px]"
    :class="`${props.color}`"
  >
    <span
      class="w-12.5 shrink-0 flex flex-col items-center rounded-[6px] py-[8px] px-[12px] counter"
    >
      <span class="text-[9px] uppercase tracking-[13%] counter-heading"
        >INST.</span
      >
      <span
        class="text-[13px] uppercase tracking-[13%] font-bold counter-text"
        >{{ props.count }}</span
      >
    </span>

    <p class="text-xs md:text-[13px] instruction">
      <slot>
        Provide the user’s transaction details to confirm its existence on the
        Vent platform before redeeming.
      </slot>
    </p>
  </div>
</template>
<style scoped>
@reference "~/assets/css/main.css";

.blue {
  @apply bg-[#F3FBFF] border border-[#E7F7FF];
}

.blue .counter {
  @apply bg-[#DFF5FF];
}

.blue .counter-heading,
.blue .counter-text {
  @apply text-brand-color-001;
}

.blue .instruction {
  @apply text-brand-color-004;
}

.rose {
  @apply bg-[#FFF8F4] border border-[#FFEDE3];
}

.rose .counter {
  @apply bg-[#FFE9DC];
}

.rose .counter-heading,
.rose .counter-text {
  @apply text-brand-color-001;
}

.rose .instruction {
  @apply text-brand-color-004;
}

.yellow {
  @apply bg-[#FFFFEF] border border-[#FFF2EA];
}

.yellow .counter {
  @apply bg-[#FFFDB2];
}

.yellow .counter-heading,
.yellow .counter-text {
  @apply text-brand-color-001;
}

.yellow .instruction {
  @apply text-brand-color-004;
}

.instruction:deep(a) {
  @apply underline;
}
</style>
