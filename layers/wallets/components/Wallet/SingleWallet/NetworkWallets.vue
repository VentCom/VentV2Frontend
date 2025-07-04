<script setup lang="ts">
import {
  Icon,
  WalletSingleWalletModalDisableWallet,
  AppModal,
} from "#components";
import { addressListBody, addressHeader } from "../../../utils/data/Addresses";

const header = addressHeader;
const data = addressListBody;
const disableWalletModalRef = ref<InstanceType<typeof AppModal> | null>(null);

const handleDisableWallet = () => {
  disableWalletModalRef.value?.showDialogBox();
};
</script>
<template>
  <Teleport to="body">
    <AppModal ref="disableWalletModalRef">
      <WalletSingleWalletModalDisableWallet></WalletSingleWalletModalDisableWallet>
    </AppModal>
  </Teleport>

  <TableComponent
    :headings="header"
    :body="data"
    :can-navigate="false"
    :cell-row-count="1"
    :grid_cols_md="7"
    :grid_cols_lg="7"
    :grid_cols_xs="2"
  >
    <template #table-heading>
      <TableComponentHeader tableName="Wallets Database" searchText="wallets">
        <template #title>
          <div class="flex items-center gap-2">
            <img src="/img/usdt_icon.svg" class="w-6 md:w-10" alt="" />
            <div class="flex items-center gap-2">
              <h6 class="text-xl text-dashboard-heading">UDST</h6>
              <span
                class="w-1 block h-1 bg-dashboard-heading rounded-full"
              ></span>
              <p class="text-[16px] text-dashboard-text-light font-normal">
                BEP20
              </p>
            </div>
          </div>
        </template>
      </TableComponentHeader>
    </template>

    <template #col_user="props">
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

    <template #col_wallet_address="props">
      <AppClipBoard :text="props.rowData.wallet_address"> </AppClipBoard>
    </template>

    <template #col_status="props">
      <AppPills color="blue">{{ props.rowData.status }}</AppPills>
    </template>

    <template #col_actions="props">
      <div class="flex items-center justify-end w-full relative z-10 pt-3">
        <AppDropdown :widthIsFinite="false" position="right">
          <button class="text-dashboard-text hover:text-brand-color-default">
            <Icon name="vent:empty-more" size="1.2rem"></Icon>
          </button>

          <template #dropdown_body>
            <div class="w-[178px]">
              <h3
                class="uppercase text-[0.5rem] text-dashboard-text-light mb-2"
              >
                Quick actions
              </h3>

              <ul
                class="flex flex-col gap-2 w-full p-2 border border-dashboard-card-border"
              >
                <li>
                  <button
                    class="flex justify-start items-center gap-2 text-dashboard-heading hover:text-brand-color-default"
                  >
                    <Icon name="vent:copy" size="1.2rem"></Icon>
                    <span class="text-[0.75rem]">Copy Address</span>
                  </button>
                </li>
                <li
                  class="w-full block border-t border-dashboard-card-border"
                ></li>
                <li>
                  <button
                    @click="handleDisableWallet"
                    class="flex justify-start items-center gap-2 text-orange-default"
                  >
                    <Icon name="vent:info-circle-outlined" size="1.2rem"></Icon>
                    <span class="text-[0.75rem]">Disable</span>
                  </button>
                </li>
              </ul>
            </div>
          </template>
        </AppDropdown>
      </div>
    </template>

    <template #table-footer>
      <TableComponentPagination></TableComponentPagination>
    </template>
  </TableComponent>
</template>
