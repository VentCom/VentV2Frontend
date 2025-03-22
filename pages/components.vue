<script setup lang="ts">
import { TableComponentHeader, TableComponentPagination } from "#components";
import {
  bankDataBody,
  bankDataHeader,
} from "~/layers/banks/utils/data/BankSummary";

const tableData = bankDataBody;
const tableHeading = bankDataHeader;
</script>
<template>
  <div class="">
    <div class="max-w-2xl mx-auto grid grid-cols-1 gap-11">
      <div>
        <AppInputContainer label="First Name">
          <input type="text" />
        </AppInputContainer>
      </div>

      <div>
        <AppInputContainer label="First Name" :isPassword="true">
          <template v-slot="props">
            <input
              :type="props.passwordIsVisible ? 'text' : 'password'"
              placeholder="Password"
            />
          </template>
        </AppInputContainer>
      </div>
    </div>

    <div class="p-5">
      <!-- Table -->
      <TableComponent
        :headings="tableHeading"
        :body="[]"
        :grid_cols_md="10"
        :grid_cols_lg="10"
        :grid_cols_xs="1"
      >
        <template #table-heading>
          <TableComponentHeader></TableComponentHeader>
        </template>

        <template #table-footer>
          <TableComponentPagination></TableComponentPagination>
        </template>
      </TableComponent>
      <!-- Table end-->
    </div>
  </div>
</template>
