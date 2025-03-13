<script lang="ts" setup>
const { minimizeSideBar, toggleSideBar } = useSidebarHandler();
</script>
<template>
  <div class="pb-0 p-8 border-b border-dashboard-card-border">
    <ul class="flex justify-between items-center pb-6">
      <li class="flex items-center gap-2">
        <img src="/img/logo.svg" class="w-6.5" alt="vent logo" />
        <h1 class="font-bold text-[1.394rem] text-dashboard-sidebar-logo">
          Vent Inc.
        </h1>
      </li>
      <li>
        <button
          @click="toggleSideBar"
          class="w-[33px] p-1.5 bg-brand-color-default rounded-lg cursor-pointer"
        >
          <span
            class="rounded bg-white w-[14px] aspect-square block transition-all duration-300 ease-in-out"
            :class="{
              'translate-x-[0]': minimizeSideBar,
              'translate-x-[50%]': !minimizeSideBar,
            }"
          >
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>
