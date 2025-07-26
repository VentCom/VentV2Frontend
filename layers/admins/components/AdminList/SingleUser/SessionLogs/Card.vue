<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type: "logged-in" | "logged-out";
    isLast?: boolean;
  }>(),
  {
    type: "logged-in",
    isLast: false,
  }
);
</script>

<template>
  <div class="flex items-start gap-6">
    <div
      class="w-[62px] text-right text-[13px] font-semibold text-dashboard-heading-blue shrink-0 whitespace-nowrap"
    >
      {{ type === "logged-in" ? "Logged In" : "Logged Out" }}
    </div>

    <div
      class="flex border-dashboard-card-border"
      :class="{
        'border-l border-dashed': !props.isLast,
      }"
    >
      <img
        :src="`/img/${type}.svg`"
        alt="session-log"
        class="w-[30px] h-[30px] relative -translate-x-1/2 shrink-0"
      />

      <div class="flex flex-col w-full gap-2 pb-6" :class="{ 'pb-0': isLast }">
        <slot>
          <h2 class="text-dashboard-text text-[13px]">
            <span class="text-dashboard-heading-blue font-semibold">
              Silverman MacBook Pro,
            </span>
            logged out of users’ account successfully.
          </h2>
        </slot>

        <p class="text-dashboard-text-light text-[13px]">2 hours ago</p>
      </div>
    </div>
  </div>
</template>
