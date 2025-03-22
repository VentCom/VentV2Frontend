<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    tableName?: string;
    searchText?: string;
  }>(),
  {
    tableName: "Transactions",
    searchText: "transactions",
  }
);
</script>
<template>
  <div
    class="flex flex-col md:flex-row gap-4 md:items-center w-full md:justify-between"
  >
    <p
      class="inline-block w-full md:w-auto font-semibold text-base md:text-xl capitalize"
    >
      {{ props.tableName }}
    </p>

    <div class="flex w-full md:w-auto gap-3">
      <!-- search -->
      <div class="w-full md:w-80 relative">
        <i
          class="absolute left-2.5 top-[50%] translate-y-[-40%] text-dashboard-sidebar-text"
        >
          <icon name="vent:search-normal"></icon>
        </i>
        <input
          type="search"
          class="inline-block w-full p-2.5 pl-8 outline-none border border-dashboard-input-border rounded-full text-sm ring-2 ring-transparent hover:border-brand-color-007 focus:border-brand-color-007 hover:ring-brand-color-007/20 focus:ring-brand-color-007/20 transition-all duration-300 ease-out"
          :placeholder="`Search ${props.searchText}`"
        />
      </div>
      <!-- search end-->

      <!-- filter button -->
      <button
        class="shrink-0 px-3 flex gap-3 items-center rounded-full justify-center border border-dashboard-card-border text-dashboard-heading group text-sm hover:border-brand-color-default"
      >
        <span class="hidden md:block"> Filter </span>
        <i
          class="text-dashboard-text inline-block mt-0.5 group-hover:text-brand-color-default w-4.5 h-4.5 aspect-square overflow-hidden cursor-pointer"
        >
          <icon name="vent:filter" size="1rem"></icon>
        </i>
      </button>
      <!-- filter button -->
    </div>
  </div>
</template>
