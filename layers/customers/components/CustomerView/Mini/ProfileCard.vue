<script setup lang="ts">
import { AppClipBoard } from "#components";
</script>

<template>
  <div
    class="flex items-center justify-between gap-6 relative w-full border border-dashboard-card-border rounded-[12px] p-4 md:p-8"
  >
    <div class="items-center flex gap-4 mb-1">
      <img
        src="/img/user.jpeg"
        class="w-[56px] h-[56px] rounded-full object-top object-cover shrink-0"
        alt="user avatar"
      />

      <!-- Profile data -->
      <div>
        <div class="items-start flex flex-col gap-2">
          <h1 class="font-medium text-dashboard-heading text-base md:text-xl">
            Johnny Doe Young
          </h1>

          <div class="flex items-center gap-2">
            <!-- country badge -->
            <div class="flex items-center gap-1">
              <img src="/img/ng-flag.svg" class="w-4 h-4 rounded-full" alt="" />
              <span class="text-dashboard-text">Nigeria</span>
            </div>
            <!-- country badge end -->

            <span
              class="w-2 h-2 bg-dashboard-text-lighter rounded-full block"
            ></span>

            <!-- Tier -->
            <div class="flex items-center gap-1">
              <img src="/img/medal-star.svg" class="w-5" alt="" />
              <span class="text-dashboard-text">Tier 3</span>
            </div>
            <!-- Tier end-->

            <span
              class="w-2 h-2 bg-dashboard-text-lighter rounded-full block"
            ></span>

            <!-- ID -->
            <AppClipBoard text="234002390029">
              <span class="text-dashboard-text"> ID: 23400239 </span>
            </AppClipBoard>
            <!-- ID end-->
          </div>
        </div>
      </div>
      <!-- Profile data -->
    </div>

    <div class="flex gap-4 items-center">
      <span class="text-xs md:text-sm">
        <AppPills color="green">Active</AppPills>
      </span>

      <button class="text-dashboard-text flex items-center">
        <Icon name="vent:empty-more" size="1.5rem"></Icon>
      </button>
    </div>
  </div>
</template>
