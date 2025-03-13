<script setup lang="ts">
import {
  AppDropdown,
  UtilityBarActiveUsers,
  UtilityBarProfileAction,
} from "#components";
</script>

<template>
  <aside
    class="sticky flex items-stretch justify-between top-0 md:py-[1.24rem] bg-dashboard-bg/60 backdrop-blur-md border-b border-dashboard-card-border p-5 md:p-8"
  >
    <!-- left side -->
    <div class="inline-flex items-center">
      <!-- search bar desktop -->
      <div class="hidden md:block w-80 relative">
        <i
          class="absolute left-2.5 top-[50%] translate-y-[-40%] text-dashboard-sidebar-text"
        >
          <icon name="vent:search-normal"></icon>
        </i>
        <input
          type="search"
          class="inline-block w-full p-2.5 pl-8 outline-none border border-dashboard-input-border rounded-xl text-sm ring-2 ring-transparent hover:border-brand-color-007 focus:border-brand-color-007 hover:ring-brand-color-007/20 focus:ring-brand-color-007/20 transition-all duration-300 ease-out"
          placeholder="Search anything"
        />
      </div>
      <!-- search bar desktop end-->
    </div>
    <!-- left side end-->

    <!-- right side -->
    <div class="flex items-center gap-2">
      <!-- notification -->
      <button
        class="w-12 h-12 flex items-center rounded-full justify-center border border-dashboard-card-border text-black hover:text-brand-color-default"
      >
        <icon name="vent:notification" size="1.3rem"></icon>
      </button>
      <!-- notification end-->

      <!-- active admins -->
      <UtilityBarActiveUsers></UtilityBarActiveUsers>
      <!-- active admins end-->

      <!-- profile action -->
      <UtilityBarProfileAction></UtilityBarProfileAction>
      <!-- profile action end-->
    </div>
    <!-- right side end-->
  </aside>
</template>
