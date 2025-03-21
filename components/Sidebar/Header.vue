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
      <li class="relative">
        <button
          @click="toggleSideBar"
          class="hidden md:block w-[33px] p-1.5 bg-brand-color-default rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
          :class="{
            'md:mb-2 bg-brand-color-default': minimizeSideBar,
            ' bg-dashboard-header-border': !minimizeSideBar,
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

        <!-- <div class="absolute top-[100%] right-0 md:left-0 pt-3 z-40">
          <div
            class="w-[274px] shadow-xl shadow-[#354A681F] p-6 bg-dashboard-bg border border-dashboard-card-border relative rounded-lg before:content after:content-[''] after:absolute after:w-3 after:aspect-square after:-top-1.5 after:border-b-0 after:border-r-0 after:left-2 after:rotate-45 after:bg-dashboard-bg after:border after:border-dashboard-card-border"
          ></div>
        </div> -->
      </li>
    </ul>
  </div>
</template>
