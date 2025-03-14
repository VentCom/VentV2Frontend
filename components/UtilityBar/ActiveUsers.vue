<template>
  <ul
    class="h-12 border border-dashboard-card-border inline-flex w-auto items-center gap-1 p-1 rounded-full group"
  >
    <li
      class="w-10 h-10 rounded-full overflow-hidden bg-brand-color-007 border border-dashboard-bg relative first:ml-0 -ml-7 group-hover:ml-0 transition-all duration-300 ease-in-out"
      v-for="(count, index) in 2"
      :key="index"
    ></li>
    <li
      class="w-10 h-10 rounded-full overflow-hidden bg-brand-color-007 border border-dashboard-bg relative first:ml-0 -ml-7 group-hover:ml-0 transition-all duration-300 ease-in-out flex items-center justify-center"
    >
      <img
        class="w-full h-full absolute top-0 left-0 z-1"
        src="/img/admin_count_bg.svg"
      />
      <span class="z-2 relative font-heading text-dashboard-heading text-sm">
        3+
      </span>
    </li>
  </ul>
</template>
