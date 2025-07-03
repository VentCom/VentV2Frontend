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
    :grid_cols_md="5"
    :grid_cols_lg="5"
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

    <template #table-footer>
      <TableComponentPagination></TableComponentPagination>
    </template>
  </TableComponent>
</template>
