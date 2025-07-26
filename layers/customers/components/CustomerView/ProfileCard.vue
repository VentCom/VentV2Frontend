<script setup lang="ts">
import { AppClipBoard } from "#components";
</script>

<template>
  <div
    class="border border-dashboard-card-border rounded-[12px] w-full overflow-hidden bg-brand-color-default"
  >
    <img
      src="/img/profile-bg-2.png"
      class="w-full h-[133px] object-cover object-center mix-blend-multiply"
      alt=""
    />
    <div class="px-5 md:px-11 !pt-0 pb-5 bg-dashboard-bg">
      <div
        class="items-end flex gap-4 max-w-[990px] w-full mx-auto translate-y-[-30%]"
      >
        <img
          src="/img/user.jpeg"
          class="w-[124px] h-[124px] rounded-full object-top object-cover shrink-0 border-10 border-white"
          alt="user avatar"
        />

        <!-- Profile data -->
        <div class="flex justify-between items-center gap-5 w-full">
          <div class="items-start flex flex-col gap-2">
            <h1 class="font-medium text-dashboard-heading text-base md:text-xl">
              Johnny Doe Young
            </h1>

            <div class="flex items-center gap-2">
              <!-- country badge -->
              <div class="flex items-center gap-1">
                <img
                  src="/img/ng-flag.svg"
                  class="w-4 h-4 rounded-full"
                  alt=""
                />
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

          <div class="flex gap-4 items-center">
            <span class="text-xs md:text-sm">
              <AppPills color="green">Active</AppPills>
            </span>

            <button class="text-dashboard-text flex items-center">
              <Icon name="vent:empty-more" size="1.5rem"></Icon>
            </button>
          </div>
        </div>
        <!-- Profile data -->
      </div>
    </div>
  </div>
</template>
