<script setup lang="ts">
import { Icon } from "#components";
import {
  transactionListBody,
  transactionListHeader,
} from "../utils/data/SettlementsList";

const header = transactionListHeader;
const data = transactionListBody;
</script>
<template>
  <TableComponent
    :headings="header"
    :body="data"
    :rowRoute="'/settlements/$'"
    :grid_cols_md="6"
    :grid_cols_lg="6"
    :grid_cols_xs="1"
  >
    <template #table-heading>
      <TableComponentHeader
        tableName="All Settlements"
        searchText="settlements"
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
      <AppPills color="orange">{{ props.rowData.d_status }}</AppPills>
    </template>

    <template #col_settlement_status="props">
      <AppPills color="yellow">{{ props.rowData.settlement_status }}</AppPills>
    </template>

    <template #col_user_name="props">
      <ul class="flex items-center gap-2">
        <li class="shrink-0">
          <img
            src="/img/user.jpeg"
            class="w-[40px] aspect-square rounded-full object-center object-cover"
            alt="User image"
          />
        </li>
        <li>
          <p>{{ props.rowData.user_name }}</p>
          <span class="text-dashboard-text text-[0.6rem]">{{
            props.rowData.user_email
          }}</span>
        </li>
      </ul>
    </template>

    <template #col_deposit="props">
      <p>{{ props.rowData.deposit }}</p>
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
