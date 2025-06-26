<script setup lang="ts">
import { Icon } from "#components";
import {
  transactionListBody,
  singleUserTransactListHeader,
} from "~/layers/transactions/utils/data/TransactionList";

const header = singleUserTransactListHeader;
const data = transactionListBody;
</script>
<template>
  <TableComponent
    :headings="header"
    :body="data"
    :rowRoute="'/transactions/$'"
    :cell-row-count="1"
    :grid_cols_md="7"
    :grid_cols_lg="7"
    :grid_cols_xs="2"
  >
    <template #table-heading>
      <TableComponentHeader
        tableName="All transactions"
        searchText="transactions"
      >
      </TableComponentHeader>
    </template>

    <template #col_d_status="props">
      <AppPills color="orange">{{ props.rowData.d_status }}</AppPills>
    </template>

    <template #col_network="props">
      <div class="flex items-center gap-2">
        <img :src="props.rowData.icon_url" class="w-6 md:w-10" alt="" />
        <div>
          <h6 class="text-base text-dashboard-heading mb-1">
            {{ props.rowData.asset }}
          </h6>
          <p class="text-[10px] text-dashboard-text">
            {{ props.rowData.network }}
          </p>
        </div>
      </div>
    </template>

    <template #col_settlement_status="props">
      <AppPills color="yellow">{{ props.rowData.settlement_status }}</AppPills>
    </template>

    <template #col_deposit="props">
      <p>{{ props.rowData.deposit }}</p>
    </template>

    <template #table-footer>
      <TableComponentPagination></TableComponentPagination>
    </template>
  </TableComponent>
</template>
