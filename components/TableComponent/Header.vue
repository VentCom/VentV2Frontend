<script lang="ts" setup>
import { Icon } from "#components";

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

const collapseFilter = ref(true);

const toggleFilterShow = () => {
  collapseFilter.value = !collapseFilter.value;
};
</script>
<template>
  <div
    class="collapsable"
    :class="{
      show: !collapseFilter,
    }"
  >
    <!-- heading -->
    <div
      class="flex flex-col md:flex-row gap-4 md:items-center w-full md:justify-between"
    >
      <p
        class="inline-block w-full md:w-auto font-medium text-base md:text-xl capitalize"
      >
        <slot name="title">
          {{ props.tableName }}
        </slot>
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
          class="shrink-0 px-3 flex gap-2 cursor-pointer items-center rounded-full justify-center border text-dashboard-heading group text-sm hover:border-brand-color-default"
          :class="{
            'border-brand-color-default': !collapseFilter,
            'border-dashboard-card-border': collapseFilter,
          }"
          @click="toggleFilterShow"
        >
          <i
            class="text-dashboard-text inline-block mt-0.5 group-hover:text-brand-color-default w-4.5 h-4.5 aspect-square overflow-hidden cursor-pointer"
          >
            <icon name="vent:filter" size="1rem"></icon>
          </i>
          <span class="hidden md:block"> Customize </span>

          <template v-if="!collapseFilter">
            <span
              class="inline-block py-0.5 rounded-full bg-brand-color-default text-white text-xs px-1.5"
            >
              1
            </span>
            <i
              class="text-dashboard-heading w-5.5 h-5.5 bg-dashboard-bg-dark rounded-full flex items-center justify-center shrink-0 aspect-square"
            >
              <Icon name="vent:close" size="0.8rem"></Icon>
            </i>
          </template>
        </button>
        <!-- filter button -->
      </div>
    </div>
    <!-- heading -->

    <!-- content -->
    <div class="collapsible-content">
      <div class="flex justify-between flex-wrap">
        <div class="flex gap-2 items-center">
          <slot></slot>
        </div>

        <button
          class="shrink-0 p-2 flex gap-2 cursor-pointer border-dashboard-card-border items-center rounded-full justify-center border text-dashboard-heading group text-xs hover:border-brand-color-default ml-auto"
        >
          <i
            class="text-dashboard-heading w-5.5 h-5.5 bg-dashboard-bg-dark rounded-full flex items-center justify-center shrink-0 aspect-square"
          >
            <Icon name="vent:close" size="0.6rem"></Icon>
          </i>
          <span class="block mr-2"> Reset </span>
        </button>
      </div>
    </div>
    <!-- content end-->
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.collapsable {
  @apply grid;
  grid-template-rows: auto 0fr;
  grid-template-columns: 1fr;
  gap: 0px;
  transition: grid-template-rows 0.3s ease;
  overflow: hidden;
}

.collapsable.show {
  grid-template-rows: auto 1fr !important;
  gap: 16px;
}

.collapsible-content {
  overflow: hidden;
}
</style>
