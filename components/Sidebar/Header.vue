<script lang="ts" setup>
const { minimizeSideBar, toggleSideBar, closeSidebar } = useSidebarHandler();
</script>
<template>
  <div class="pb-0 p-8 border-b border-dashboard-card-border">
    <ul
      class="flex justify-between items-center pb-6"
      :class="{
        'md:justify-center': minimizeSideBar,
      }"
    >
      <li class="flex items-center gap-2">
        <img
          src="/img/logo.svg"
          class="w-6.5"
          alt="vent logo"
          :class="{
            'md:hidden': minimizeSideBar,
          }"
        />
        <h1
          class="font-bold text-[1.394rem] text-dashboard-sidebar-logo whitespace-nowrap"
          :class="{
            'md:hidden': minimizeSideBar,
          }"
        >
          Vent Inc.
        </h1>
      </li>
      <li>
        <button
          @click="toggleSideBar"
          class="hidden md:block w-[33px] p-1.5 bg-brand-color-default rounded-lg cursor-pointer"
          :class="{
            'md:mb-2': minimizeSideBar,
          }"
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

        <!-- close side bar -->
        <button
          @click="closeSidebar"
          class="md:hidden w-12 h-12 flex items-center rounded-full justify-center border border-dashboard-card-border text-brand-color-default"
        >
          <icon name="vent:close" size="1.3rem"></icon>
        </button>
        <!-- close side bar end-->
      </li>
    </ul>
  </div>
</template>
