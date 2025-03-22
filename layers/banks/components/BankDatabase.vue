<script setup lang="ts">
import {
  AppPills,
  TableComponentHeader,
  TableComponentPagination,
} from "#components";
import { bankDataBody, bankDataHeader } from "../utils/data/BankSummary";

const tableData = bankDataBody;
const tableHeading = bankDataHeader;
</script>

<template>
  <!-- Table -->
  <TableComponent
    :headings="tableHeading"
    :body="tableData"
    :grid_cols_md="10"
    :grid_cols_lg="10"
    :grid_cols_xs="1"
  >
    <template #table-heading>
      <TableComponentHeader tableName="Banks Database" searchText="for bank">
      </TableComponentHeader>
    </template>

    <template #col_status="props">
      <AppPills>{{ props.rowData.status }}</AppPills>
    </template>

    <template #table-footer>
      <TableComponentPagination></TableComponentPagination>
    </template>
  </TableComponent>
  <!-- Table end-->
</template>
