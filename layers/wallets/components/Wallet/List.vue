<script setup lang="ts">
import { Icon } from "#components";
import { walletListBody, walletsHeader } from "../../utils/data/Wallets";

const header = walletsHeader;
const data = walletListBody;
</script>
<template>
  <TableComponent
    :headings="header"
    :body="data"
    :rowRoute="'/wallets/$'"
    :cell-row-count="1"
    :grid_cols_md="11"
    :grid_cols_lg="11"
    :grid_cols_xs="2"
  >
    <template #table-heading>
      <TableComponentHeader tableName="Wallets Database" searchText="wallets">
      </TableComponentHeader>
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

    <template #col_status="props">
      <div class="h-full flex items-center w-full self-center">
        <AppPills color="blue" :has-tick="true">{{
          props.rowData.status
        }}</AppPills>
      </div>
    </template>

    <template #col_action>
      <button
        class="text-dashboard-text hover:text-brand-color-default flex w-full justify-end"
      >
        <Icon name="vent:empty-more" size="1.5rem"></Icon>
      </button>
    </template>

    <template #table-footer>
      <TableComponentPagination></TableComponentPagination>
    </template>
  </TableComponent>
</template>
