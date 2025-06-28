<script setup lang="ts">
import {
  customerListBody,
  customerListHeader,
} from "../../utils/data/AdminData";

const header = customerListHeader;
const data = customerListBody;
</script>
<template>
  <TableComponent
    :headings="header"
    :body="data"
    :rowRoute="'/admins/$'"
    :grid_cols_md="6"
    :grid_cols_lg="6"
    :grid_cols_xs="1"
  >
    <template #table-heading>
      <TableComponentHeader
        tableName="Customers Database"
        searchText="customers"
      >
      </TableComponentHeader>
    </template>

    <template #col_status="props">
      <AppPills color="orange">{{ props.rowData.status }}</AppPills>
    </template>

    <template #col_kyc_tier_status="props">
      <AppPills color="green" :has-tick="true">{{
        props.rowData.kyc_tier_status
      }}</AppPills>
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

    <template #table-footer>
      <TableComponentPagination></TableComponentPagination>
    </template>
  </TableComponent>
</template>
