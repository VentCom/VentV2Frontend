<script setup lang="ts">
import { AppPills } from "#components";
</script>

<template>
  <div
    class="w-full border border-dashboard-card-border bg-white rounded-[10px] p-5 flex flex-col gap-3"
  >
    <div class="w-full flex items-center justify-between text-[10px] uppercase">
      <AppPills color="blue">Business</AppPills>

      <button
        class="text-dashboard-text-light cursor-pointer hover:text-brand-color-default"
      >
        <Icon name="vent:empty-more" size="1.2rem"></Icon>
      </button>
    </div>

    <div class="flex items-end justify-between gap-2 w-full">
      <div>
        <p
          class="text-dashboard-text-darker font-bold text-base leading-[130%]"
        >
          0011223344
        </p>
        <p class="text-dashboard-text-darker text-sm leading-[130%]">
          United Bank of Africa
        </p>
        <p class="text-dashboard-text-light text-[10px] leading-[130%]">
          Peremobowei Agiddi
        </p>
      </div>

      <img
        src="/img/uba_logo.jpg"
        class="w-[23px] shrink-0 h-[23px] rounded-full object-center object-cover"
        alt=""
      />
    </div>
  </div>
</template>
