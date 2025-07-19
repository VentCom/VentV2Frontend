<script setup lang="ts">
import { AppExpandableModal, Icon } from "#components";
import {
  customerListBody,
  customerListHeader,
} from "../../utils/data/CustomersData";

const header = customerListHeader;
const data = customerListBody;
const customerViewModal = ref<InstanceType<typeof AppExpandableModal>>();

const { activateFullView, activateMiniView } = useCustomerConfig();

const showCustomer = () => {
  customerViewModal.value?.showDialogBox();
};

onUnmounted(() => {
  activateMiniView();
});
</script>
<template>
  <Teleport to="body">
    <AppExpandableModal
      @view-full-modal="activateFullView"
      @view-mini-modal="activateMiniView"
      ref="customerViewModal"
    >
      <CustomerView></CustomerView>
    </AppExpandableModal>
  </Teleport>
  <TableComponent
    :headings="header"
    :body="data"
    :rowRoute="'/customers/$'"
    :grid_cols_md="6"
    :grid_cols_lg="6"
    :grid_cols_xs="1"
    :can-navigate="false"
    @trigger-event="showCustomer"
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
