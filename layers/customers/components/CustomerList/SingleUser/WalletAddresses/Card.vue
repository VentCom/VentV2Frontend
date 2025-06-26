<script setup lang="ts">
import { AppPills } from "#components";
</script>

<template>
  <div
    class="w-full border border-dashboard-card-border rounded-[10px] p-5 flex justify-between gap-3"
  >
    <div class="flex items-start gap-2 w-full">
      <img src="/img/usdt_icon.svg" class="w-[40px] shrink-0" alt="" />
      <div>
        <p
          class="text-dashboard-text-darker font-bold text-base leading-[130%] flex items-center gap-1"
        >
          TFX8ek...76hjkf
          <span class="text-[8px] uppercase">
            <AppPills color="green">Active</AppPills>
          </span>
        </p>
        <p class="text-dashboard-text-darker text-sm leading-[130%]">
          USDT (TRC20)
        </p>
        <p class="text-dashboard-text-light text-[10px] leading-[130%]">
          Westgate
        </p>
      </div>
    </div>

    <div class="shrink-0 flex flex-col justify-between items-end gap-3">
      <button
        class="text-dashboard-text-light cursor-pointer hover:text-brand-color-default"
      >
        <Icon name="vent:empty-more" size="16px"></Icon>
      </button>

      <button
        class="text-dashboard-text-light cursor-pointer hover:text-brand-color-default"
      >
        <Icon name="vent:copy" size="16px"></Icon>
      </button>
    </div>
  </div>
</template>
