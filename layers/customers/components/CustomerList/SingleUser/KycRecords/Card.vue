<script setup lang="ts">
import { AppPills } from "#components";

const props = withDefaults(
  defineProps<{
    name?: string;
    icon?: string;
    tier?: number;
  }>(),
  {
    name: "Contact Details",
    icon: "vent:contact-details",
    tier: 1,
  }
);
</script>

<template>
  <div
    class="w-full border border-dashboard-card-border rounded-[10px] p-5 flex flex-col gap-4"
  >
    <div class="w-full flex items-center justify-between text-[10px]">
      <div class="flex gap-2 w-full">
        <span
          class="flex w-[37px] items-center justify-center rounded-[8px] text-dashboard-heading border shrink-0 border-dashboard-card-border-light bg-[#FAFAFA]"
        >
          <Icon :name="props.icon" size="19px"></Icon>
        </span>

        <div>
          <div class="flex items-center gap-2">
            <h6 class="text-[9px] text-uppercase text-dashboard-text uppercase">
              Tier {{ props.tier }}
            </h6>

            <AppPills color="green">
              <span class="text-[8px] flex items-center gap-1">
                <Icon name="vent:verify" size="12px"></Icon>
                Verified
              </span></AppPills
            >
          </div>
          <p class="text-[13px] mt-[4px] text-dashboard-heading">
            {{ props.name }}
          </p>
        </div>
      </div>

      <button
        class="text-dashboard-text-light cursor-pointer hover:text-brand-color-default"
      >
        <Icon name="vent:empty-eye" size="1.2rem"></Icon>
      </button>
    </div>

    <div class="border-t border-dashboard-card-divider"></div>

    <div class="flex flex-col gap-4 w-full">
      <slot />
    </div>
  </div>
</template>
