<script setup lang="ts">
import { Icon } from "#components";
import {
  transactionListBody,
  transactionListHeader,
} from "~/layers/wallets/utils/data/Transactions";

const header = transactionListHeader;
const data = transactionListBody;
</script>
<template>
  <TableComponent
    :headings="header"
    :body="data"
    :rowRoute="'/transactions/$'"
    :cell-row-count="1"
    :grid_cols_md="5"
    :grid_cols_lg="5"
    :grid_cols_xs="2"
  >
    <template #table-heading>
      <AdminListSingleUserTransactionsHeading></AdminListSingleUserTransactionsHeading>
    </template>

    <template #col_reference="props">
      <p class="flex items-center gap-1">
        <span>{{ props.rowData.reference }}</span>
        <i class="inline-block mt-1 text-brand-color-default">
          <Icon name="vent:external-link" size="1.2rem"></Icon>
        </i>
      </p>
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
