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
          <p class="text-dashboard-text text-[13px]">
            ostrichiow002, 298oakdo9lkdliosi, jijweo89a0sdfw9,
            shfisdfoi892900sdf, o9248ru9r89a8sdf, jog20rusojis89233,
            0i3os00sgf9u9u0wk, dfos889uw9u00skje, 283029309sijijsvkwej,
            jwe99w8820s8920
          </p>
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
