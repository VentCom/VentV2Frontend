<script lang="ts" setup>
import { AppPills } from "#components";

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
  <ul class="w-full">
    <li class="flex gap-3 w-full">
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
          class="text-dashboard-heading text-xs md:text-base flex justify-between items-start w-full"
        >
          <div>
            <span class="font-semibold">Peremobowei Agiddi</span> changed
            default settlement account to
            <span class="text-xs md:text-sm">
              <AppPills color="blue">32029310938 First Bank</AppPills></span
            >
          </div>
          <span class="text-sm text-dashboard-text hidden md:inline">
            2 hours ago
          </span>
        </li>
        <li class="text-xs md:hidden">2 hours ago</li>
        <li
          class="p-4 bg-chat-bg rounded-xl rounded-tl-none text-dashboard-heading text-xs md:text-base inline-block max-w-2xl"
        >
          This is a sample text representing the comment entered by an admin
        </li>
        <li class="text-xs md:text-sm">
          <AppPills color="orange">Open</AppPills>
        </li>
      </ul>
      <!-- comment details end-->
    </li>
  </ul>
</template>
