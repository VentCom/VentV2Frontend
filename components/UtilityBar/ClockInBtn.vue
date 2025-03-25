<script setup lang="ts">
const { toggleClockIn, clockedIn } = useClockInHandler();
</script>
<template>
  <button
    @click="toggleClockIn"
    class="h-12 cursor-pointer hover:shadow-2xl shadow-brand-color-011 inline-flex w-auto items-center gap-1 p-1 bg-brand-color-default rounded-full transition-all duration-300 ease-in-out border border-dashboard-header-border hover:border-brand-color-default"
    :class="{
      'bg-brand-color-default': clockedIn,
      'bg-dashboard-header-border': !clockedIn,
    }"
  >
    <ul
      class="flex flex-col items-center transition-all duration-300 ease-in-out p-1"
      :class="{
        'text-white': clockedIn,
        ' text-dashboard-text translate-x-[110%]': !clockedIn,
      }"
    >
      <li class="text-[0.5rem] uppercase tracking-widest">Clock</li>
      <li class="text-[0.83rem] font-bold -mt-0.5 uppercase">
        {{ clockedIn ? "Out" : "In" }}
      </li>
    </ul>

    <span
      class="w-10 h-10 rounded-full flex items-center justify-center text-brand-color-default bg-white transition-all duration-300 ease-in-out"
      :class="{
        'text-brand-color-default': clockedIn,
        ' text-dashboard-text translate-x-[-105%]': !clockedIn,
      }"
    >
      <Icon name="vent:timer" size="1.3rem"></Icon>
    </span>
  </button>
</template>
