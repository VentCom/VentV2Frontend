<script setup lang="ts">
import { AppCheckbox } from "#components";
</script>

<template>
  <div class="border border-dashboard-card-border">
    <div
      class="p-5 md:p-10 flex flex-col md:flex-row gap-5 items-start justify-between"
    >
      <div class="w-full md:w-[358px]">
        <h2 class="text-dashboard-heading font-semibold text-xl pb-2">
          Payment Gateways
        </h2>
        <p class="text-xs md:text-base text-dashboard-text">
          Configure and manage the gateway that processes payments on Vent
        </p>
      </div>

      <div class="w-full md:w-1/2 grid grid-cols-1 gap-4">
        <ul class="grid grid-cols-1 w-full gap-5">
          <li class="flex gap-3">
            <AppSwitch id="pg_glyde"></AppSwitch>
            <label class="text-dashboard-heading text-base" for="pg_glyde"
              >Glyde</label
            >
          </li>

          <li class="flex gap-3">
            <AppSwitch id="pg_vent_bank"></AppSwitch>
            <label class="text-dashboard-heading text-base" for="pg_vent_bank"
              >Vent Bank</label
            >
          </li>

          <li class="flex gap-3">
            <AppSwitch id="pg_add_me"></AppSwitch>
            <label class="text-dashboard-heading text-base" for="pg_add_me"
              >Add me</label
            >
          </li>

          <li class="flex gap-3">
            <AppSwitch id="pg_add_me_2"></AppSwitch>
            <label class="text-dashboard-heading text-base" for="pg_add_me_2"
              >Add me</label
            >
          </li>
        </ul>
      </div>
    </div>
    <ul
      class="flex justify-between items-center bg-[#FAFAFA] border-t border-dashboard-card-border"
    >
      <li
        class="p-6 md:p-10 md:py-5.5 block text-[0.81rem] text-dashboard-text"
      >
        These are the payment gateways handling transactions on Vent.
      </li>

      <li class="p-3 grid grid-cols-2 gap-3 shrink-0">
        <AppButton size="sm" :color="'neutral'" :block="false"
          >Cancel</AppButton
        >
        <AppButton size="sm" :outlined="true" :block="false">Save</AppButton>
      </li>
    </ul>
  </div>
</template>
