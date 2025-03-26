<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    hasConnector?: boolean;
    isLast?: boolean;
  }>(),
  {
    hasConnector: false,
    isLast: false,
  }
);
</script>
<template>
  <li class="flex gap-3">
    <figure class="shrink-0 relative">
      <span
        v-if="props.hasConnector || !props.isLast"
        class="absolute h-full top-0 left-[50%] translate-x-[-50%] border-dashed border-l border-dashboard-card-border"
      ></span>
      <img
        src="/img/user.jpeg"
        class="w-8 h-8 rounded-full object-center object-cover relative z-2"
        alt=""
      />
    </figure>

    <!-- log details -->
    <ul
      class="grow grid grid-cols-1 gap-1"
      :class="{
        'pb-10': !props.isLast,
      }"
    >
      <li class="text-dashboard-heading text-xs md:text-base">
        <span class="font-semibold">Peremobowei Agiddi</span> created a
        settlement for this transaction
      </li>
      <li class="text-xs md:text-[0.813rem] text-dashboard-text">
        Friday, March 21, 2025 11:25PM
      </li>
    </ul>
    <!-- log details end-->
  </li>
</template>
