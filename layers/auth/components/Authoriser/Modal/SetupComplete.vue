<script setup lang="ts">
import { AppButton } from "#components";
</script>

<template>
  <div class="grid grid-cols-1 gap-10">
    <div class="flex flex-col gap-6 items-center">
      <img src="/img/succesTag.svg" class="w-[72px]" alt="" />

      <div>
        <h1 class="text-2xl font-semibold text-center mb-2">
          2FA Setup Successful
        </h1>
        <p class="text-center text-dashboard-text">
          You’ve successfully enabled 2FA on this device. Please save the
          recovery keys below — they’ll be essential if you ever lose access to
          your device.
        </p>
      </div>

      <div>
        <div class="border border-dashboard-card-border rounded-[12px] p-6">
          <h2 class="text-dashboard-text-light mb-2 text-[13px]">
            Recovery Keys
          </h2>

          <div class="grid grid-cols-2 gap-3">
            <p
              class="text-dashboard-text text-[13px] flex flex-col gap-1 items-start font-mono"
            >
              <span>ostrichiow002</span>
              <span>298oakdo9lkdliosi</span>
              <span>jijweo89a0sdfw9</span>
              <span>shfisdfoi892900sdf</span>
              <span>o9248ru9r89a8sdf </span>
            </p>
            <p
              class="text-dashboard-text text-[13px] flex flex-col gap-1 items-end font-mono text-right"
            >
              <span> jog20rusojis89233</span>
              <span>0i3os00sgf9u9u0wk</span>
              <span>dfos889uw9u00skje</span>
              <span>283029309sijijsvkwej </span>
              <span>jwe99w8820s8920</span>
            </p>
          </div>
        </div>
        <button
          class="mt-3 rounded-full px-4 py-2 border border-brand-color-007 text-brand-color-007 text-[13px] cursor-pointer"
        >
          Copy Keys
        </button>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="w-[245px]">
        <AppButton block>I have copied the keys</AppButton>
      </div>
    </div>
  </div>
</template>
