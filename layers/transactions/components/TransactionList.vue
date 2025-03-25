<script setup lang="ts">
import { Icon } from "#components";
import {
  transactionListBody,
  transactionListHeader,
} from "../utils/data/TransactionList";

const header = transactionListHeader;
const data = transactionListBody;
</script>
<template>
  <TableComponent
    :headings="header"
    :body="data"
    :rowRoute="'/transactions/$'"
    :grid_cols_md="8"
    :grid_cols_lg="8"
    :grid_cols_xs="1"
  >
    <template #table-heading>
      <TableComponentHeader
        tableName="All transactions"
        searchText="transactions"
      >
      </TableComponentHeader>
    </template>

    <template #col_reference="props">
      <p class="flex items-center gap-1">
        <span>{{ props.rowData.reference }}</span>
        <i class="inline-block mt-1">
          <Icon name="vent:external-link" size="1.2rem"></Icon>
        </i>
      </p>
    </template>

    <template #col_d_status="props">
      <AppPills color="orange">{{ props.rowData.d_status }}</AppPills>
    </template>

    <template #col_settlement_status="props">
      <AppPills color="yellow">{{ props.rowData.settlement_status }}</AppPills>
    </template>

    <template #col_user_name="props">
      <p>{{ props.rowData.user_name }}</p>
      <span class="text-dashboard-text text-[0.6rem]">{{
        props.rowData.user_email
      }}</span>
    </template>

    <template #col_deposit="props">
      <p>{{ props.rowData.deposit }}</p>
      <span class="text-dashboard-text text-[0.55rem] uppercase tracking-widest"
        >Worth of {{ props.rowData.asset }}</span
      >
    </template>

    <template #col_action>
      <div class="md:w-full md:flex md:justify-center">
        <Icon name="vent:eye" size="1.2rem"></Icon>
      </div>
    </template>

    <template #table-footer>
      <TableComponentPagination></TableComponentPagination>
    </template>
  </TableComponent>
</template>
