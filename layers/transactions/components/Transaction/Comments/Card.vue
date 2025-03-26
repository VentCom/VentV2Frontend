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
  <ul>
    <li class="flex gap-3">
      <figure class="shrink-0 relative">
        <!-- connector -->
        <span
          v-if="props.hasConnector || !props.isLast"
          class="absolute h-full top-0 left-[50%] translate-x-[-50%] border-dashed border-l border-dashboard-card-border"
        ></span>
        <!-- connector end -->

        <img
          src="/img/user.jpeg"
          class="w-8 h-8 rounded-full object-center object-cover relative z-2"
          alt=""
        />
      </figure>

      <!-- comment details -->
      <ul
        class="grow flex flex-col w-full gap-2 items-start"
        :class="{
          'pb-10': !props.isLast,
        }"
      >
        <li
          class="p-4 bg-chat-bg rounded-xl rounded-tl-none text-dashboard-heading text-xs md:text-base inline-block max-w-2xl"
        >
          This is a sample text representing the comment entered by an admin
        </li>
        <li
          class="flex items-center gap-2 text-dashboard-text text-[0.55rem] md:text-[0.813rem] flex-wrap"
        >
          <span class="whitespace-nowrap text-dashboard-heading"
            >Gift Dappa</span
          >
          <span
            class="block w-2 aspect-square rounded-full bg-dashboard-text-light shrink-0"
          ></span>
          <span class="whitespace-nowrap"> March 22, 2025 02:23AM</span>
        </li>
      </ul>
      <!-- comment details end-->
    </li>
  </ul>
</template>
