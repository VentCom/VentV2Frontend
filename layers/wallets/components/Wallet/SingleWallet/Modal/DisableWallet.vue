<script setup lang="ts">
import { AppButton } from "#components";
import App from "~/app.vue";
</script>

<template>
  <div class="grid grid-cols-1 gap-10">
    <h1 class="text-dashboard-heading text-[25px] font-semibold">
      Disable Wallet
    </h1>

    <div>
      <p class="text-[16px] text-dashboard-heading font-normal mb-4">
        Are you sure you want to disable the wallet?
      </p>
      <p class="text-[16px] text-dashboard-text font-normal">
        Disabling this address will prevent it from receiving funds. You can
        re-enable it at any time.
      </p>
    </div>

    <div class="flex items-center gap-2">
      <AppButton :block="false" color="neutral" :rounded="false"
        >No, Cancel</AppButton
      >
      <AppButton :block="false" color="primary" :rounded="false"
        >Yes, Disable</AppButton
      >
    </div>
  </div>
</template>
