<script lang="ts" setup>
import type {
  ITableBodyData,
  ITableHeaderData,
} from "~/utils/types/misc/TableComponent";

const props = withDefaults(
  defineProps<{
    tableName?: string;
    headings: ITableHeaderData[];
    body: ITableBodyData[];
    canSearch?: boolean;
    isLoading?: boolean;
    showPagination?: boolean;
    totalPages?: number;
    currentPage?: number;
    rowRoute?: string;
    cellRowCount?: number;
    canNavigate?: boolean;
    grid_cols_xs?: number | 2;
    grid_cols_md?: number | 7;
    grid_cols_lg?: number | 7;
    routeParamName?: string;
    hideOuterBorder?: boolean;
  }>(),
  {
    headings: () => [
      {
        name: "",
        id: "",
        cellRow: 1,
        showHeading: true,
      },
    ],
    body: () => [
      {
        id: 1,
        name: "",
      },
    ],
    canSearch: false,
    isLoading: false,
    showPagination: false,
    cellRowCount: 1,
    totalPages: 1,
    currentPage: 1,
    rowRoute: "",
    canNavigate: true,
    routeParamName: "id",
    hideOuterBorder: false,
  }
);
const emit = defineEmits(["triggerEvent"]);
const setRoute = (id: string) => {
  return props.rowRoute.replace("$", `${id}`);
};
const triggerEvent = (rowData: ITableBodyData) => emit("triggerEvent", rowData);
const bodyData = computed(() => {
  return props.body;
});

const generateGridClass = (span: number) => {
  return `repeat(${span}, minmax(0, 1fr))`;
};
</script>
<template>
  <div class="w-full font-body">
    <div
      class="rounded-2xl"
      :class="{
        'border-0 p-0': hideOuterBorder,
        'p-6 border border-dashboard-card-border': !hideOuterBorder,
      }"
      role="table"
    >
      <!-- heading content -->
      <div class="pb-5">
        <slot name="table-heading" />
      </div>
      <!-- heading content end -->

      <template v-if="!isLoading && bodyData.length > 0">
        <!-- table body -->
        <div
          class="flex flex-col gap-2.5 p-2.5 bg-dashboard-bg-darker border border-dashboard-card-border rounded-lg"
        >
          <div
            v-for="(row, index) in bodyData"
            :key="index"
            role="row"
            class="cursor-pointer px-3 md:px-6 text-sm border border-dashboard-card-border bg-white hover:bg-brand-color-013/40 rounded-lg relative hover:border-brand-color-default transition-colors duration-400"
            tabindex="0"
          >
            <nuxt-link
              custom
              :to="setRoute(row[routeParamName] || '')"
              v-slot="{ navigate }"
            >
              <ul
                v-for="(cellRow, index) in cellRowCount"
                :key="index"
                class="w-full grid grid-cols-[var(--xs-cols)] md:grid-cols-[var(--md-cols)] lg:grid-cols-[var(--lg-cols)] py-5 gap-y-4 gap-x-3 first:border-t-0 border-t border-dashed border-dashboard-card-border"
                :style="{
                  '--xs-cols': generateGridClass(props.grid_cols_xs || 0),
                  '--md-cols': generateGridClass(props.grid_cols_md || 0),
                  '--lg-cols': generateGridClass(props.grid_cols_lg || 0),
                }"
              >
                <template v-for="(rowColumn, index) in headings" :key="index">
                  <li
                    @click.prevent="
                      () => (canNavigate ? navigate() : triggerEvent(row))
                    "
                    role="cell"
                    v-if="rowColumn.cellRow === cellRow"
                    :aria-describedby="rowColumn.name"
                    tabindex="-1"
                    :class="[
                      'md:block',
                      'break-words',
                      rowColumn.is_hidden_xs && 'hidden',
                    ]"
                    class="flex flex-col items-start col-span-[var(--xs-cols)] md:col-span-[var(--md-cols)] lg:col-span-[var(--lg-cols)]"
                    :style="{
                      '--xs-cols': rowColumn.span_xs,
                      '--md-cols': rowColumn.span_md,
                      '--lg-cols': rowColumn.span_lg,
                    }"
                  >
                    <span
                      class="block text-[0.5rem] md:text-[0.6rem] text-dashboard-text uppercase mb-1 md:mb-2"
                      v-if="rowColumn.showHeading"
                    >
                      {{ rowColumn.name }}
                    </span>

                    <div
                      class="text-dashboard-heading text-[0.7rem] md:text-sm text-left flex flex-col items-start"
                    >
                      <slot :name="`col_${rowColumn.id}`" :rowData="row">
                        {{ row[rowColumn.id] }}
                      </slot>
                    </div>
                  </li>
                </template>
              </ul>
            </nuxt-link>
          </div>
        </div>
        <!-- table body end-->

        <div class="mt-4">
          <slot name="table-footer" />
        </div>
      </template>
      <template v-else-if="!isLoading && bodyData.length === 0">
        <div class="flex items-center justify-center min-h-[50vh] flex-col">
          <img
            src="/img/empty_state.svg"
            alt="emptystate"
            class="w-[100%] object-cover object-center mx-auto md:w-[50%]"
          />
          <h1 class="font-bold text-base text-dashboard-heading mt-1">
            Nothing to show here!
          </h1>
          <p
            class="font-medium text-sm text-[#B3B3B3] mt-1 text-center max-w-md w-full"
          >
            There are no networks to display at the moment. Once banks status
            are updated, you’ll see it here.
          </p>
        </div>
      </template>
      <template v-if="isLoading">
        <div class="flex flex-col gap-4 px-1">
          <ul
            class="grid cursor-pointer gap-3 px-3 py-3 text-sm hover:bg-brand-color-012 border-b last:border-b-0 rounded-none md:border-b-0 hover:rounded-lg hover:border-0"
            v-for="(count, index) in 5"
            :key="index"
            :class="[
              `lg:grid-cols-${grid_cols_lg}`,
              `md:grid-cols-${grid_cols_md}`,
              `grid-cols-${grid_cols_xs}`,
            ]"
          >
            <li
              :class="[
                `col-span-${rowColumn.span_xs}`,
                `md:col-span-${rowColumn.span_md}`,
                `lg:col-span-${rowColumn.span_lg}`,
                'md:block',
                rowColumn.is_hidden_xs && 'hidden',
              ]"
              v-for="(rowColumn, index) in headings"
              :key="index"
            >
              <span
                class="inline-block w-full p-4 rounded-md bg-slate-200 animate-pulse"
              >
              </span>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>
