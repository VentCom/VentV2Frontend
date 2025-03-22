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
    canNavigate?: boolean;
    grid_cols_xs?: number | 2;
    grid_cols_md?: number | 7;
    grid_cols_lg?: number | 7;
    routeParamName?: string;
  }>(),
  {
    headings: () => [
      {
        name: "",
        id: "",
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
    totalPages: 1,
    currentPage: 1,
    rowRoute: "",
    canNavigate: true,
    routeParamName: "id",
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
      class="container mx-auto border border-dashboard-card-border rounded-2xl p-4 md:p-6 py-6"
    >
      <div class="mb-4">
        <slot name="table-heading" />
      </div>

      <template v-if="!isLoading && bodyData.length > 0">
        <ul
          class="hidden md:grid px-3 py-4 text-sm font-medium gap-3 text-dashboard-heading grid-cols-[var(--xs-cols)] md:grid-cols-[var(--md-cols)] lg:grid-cols-[var(--lg-cols)] bg-table-heading-bg rounded-2xl"
          :style="{
            '--xs-cols': generateGridClass(props.grid_cols_xs || 0),
            '--md-cols': generateGridClass(props.grid_cols_md || 0),
            '--lg-cols': generateGridClass(props.grid_cols_lg || 0),
          }"
        >
          <li
            v-for="(column, index) in headings"
            :key="index"
            class="col-span-[var(--xs-cols)] md:col-span-[var(--md-cols)] lg:col-span-[var(--lg-cols)]"
            :style="{
              '--xs-cols': column.span_xs,
              '--md-cols': column.span_md,
              '--lg-cols': column.span_lg,
            }"
          >
            <button class="flex items-center gap-2 group cursor-pointer">
              <span>{{ column.name }}</span>
              <i
                class="inline-block mt-0.5 text-dashboard-sidebar-text/60 group-hover:text-brand-color-default"
              >
                <Icon name="vent:column-select" size="0.8rem"></Icon>
              </i>
            </button>
          </li>
        </ul>
        <div class="flex flex-col gap-4 md:gap-0 px-1">
          <nuxt-link
            custom
            :to="setRoute(row[routeParamName] || '')"
            v-slot="{ navigate }"
            v-for="(row, index) in bodyData"
            :key="index"
          >
            <ul
              @click.prevent="
                () => (canNavigate ? navigate() : triggerEvent(row))
              "
              class="grid cursor-pointer gap-3 px-3 py-5 text-sm border border-dashboard-card-border md:border-b md:border-0 hover:bg-brand-color-013/40 md:rounded-none rounded-lg relative grid-cols-[var(--xs-cols)] md:grid-cols-[var(--md-cols)] lg:grid-cols-[var(--lg-cols)]"
              :style="{
                '--xs-cols': generateGridClass(props.grid_cols_xs || 0),
                '--md-cols': generateGridClass(props.grid_cols_md || 0),
                '--lg-cols': generateGridClass(props.grid_cols_lg || 0),
              }"
              tabindex="0"
            >
              <li
                :class="[
                  'md:block',
                  'break-words',
                  rowColumn.is_hidden_xs && 'hidden',
                ]"
                class="flex justify-between items-start gap-2 md:col-span-[var(--md-cols)] lg:col-span-[var(--lg-cols)]"
                :style="{
                  '--md-cols': rowColumn.span_md,
                  '--lg-cols': rowColumn.span_lg,
                }"
                v-for="(rowColumn, index) in headings"
                :key="index"
              >
                <span class="block md:hidden text-[0.7rem] text-dashboard-text">
                  {{ rowColumn.name }}
                </span>

                <div
                  class="text-dashboard-heading text-[0.7rem] md:text-sm text-right md:text-left flex flex-col items-end md:items-start"
                >
                  <slot :name="`col_${rowColumn.id}`" :rowData="row">
                    {{ row[rowColumn.id] }}
                  </slot>
                </div>
              </li>
            </ul>
          </nuxt-link>
        </div>

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
