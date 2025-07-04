<script setup lang="ts">
import { Icon } from "#components";
import {
  transactionListBody,
  transactionListHeader,
} from "../../utils/data/TransactionList";

const header = transactionListHeader;
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
        tableName="Redeemed Transactions"
        searchText="transactions"
      >
      </TableComponentHeader>
    </template>

    <template #col_reference="props">
      <p class="flex items-center gap-1">
        <span>{{ props.rowData.reference }}</span>
        <i class="inline-block mt-1 text-brand-color-default">
          <Icon name="vent:external-link" size="1.2rem"></Icon>
        </i>
      </p>
    </template>

    <template #col_d_status="props">
      <AppPills color="green">{{ props.rowData.d_status }}</AppPills>
    </template>

    <template #col_deposit="props">
      <p>{{ props.rowData.deposit }}</p>
    </template>

    <template #table-footer>
      <TableComponentPagination></TableComponentPagination>
    </template>
  </TableComponent>
</template>
