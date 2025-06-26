<script setup lang="ts">
import {
  CustomerListSingleUserProfileCard,
  CustomerListSingleUserTransactions,
} from "#components";
import type { TabsData } from "~/utils/types/misc/Tabs";

const links = ref([
  {
    name: "Customers",
    route: "/customers",
  },
  {
    name: "User’s Information",
    route: "/customers/[user_uid]",
  },
]);

const tabs = ref<TabsData[]>([
  {
    name: "Bank Details",
    id: "bank-details",
    icon: "vent:bank",
    counts: 0,
  },
  {
    name: "Wallet Addresses",
    id: "wallet-addresses",
    icon: "vent:empty-wallet",
    counts: 0,
  },
  {
    name: "KYC records",
    id: "kyc-records",
    icon: "vent:security-user",
    counts: 0,
  },
  {
    name: "Restrictions",
    id: "restrictions",
    icon: "vent:info-circle-outlined",
    counts: 0,
  },
]);
</script>
<template>
  <div class="w-full flex flex-col md:flex-row gap-5">
    <!-- sidebar -->
    <div class="max-w-[381px] w-full">
      <AppBreadcrumb :list="links"></AppBreadcrumb>

      <div
        class="w-full border border-dashboard-card-border rounded-[16px] p-8 mt-4 overflow-hidden relative flex flex-col gap-10"
      >
        <div class="absolute top-0 left-0 h-[93px] w-full bg-[#F0FAFF]">
          <img
            src="/img/profile-bg.png"
            class="w-full h-full object-cover object-center mix-blend-multiply opacity-40"
            alt=""
          />
        </div>

        <CustomerListSingleUserProfileCard></CustomerListSingleUserProfileCard>

        <!-- full details -->
        <CustomerListSingleUserProfile></CustomerListSingleUserProfile>
        <!-- full details end -->
      </div>
    </div>
    <!-- sidebar end -->

    <div class="w-full flex flex-col gap-5">
      <div class="w-full border border-dashboard-card-border rounded-2xl p-6">
        <AppTab
          :tab-list="tabs"
          tab-btn-style="full-border"
          :defaultTabId="'bank-details'"
        >
          <template #bank-details>
            <CustomerListSingleUserBankDetails></CustomerListSingleUserBankDetails>
          </template>

          <template #wallet-addresses>
            <CustomerListSingleUserWalletAddresses></CustomerListSingleUserWalletAddresses>
          </template>

          <template #kyc-records>
            <CustomerListSingleUserKycRecords></CustomerListSingleUserKycRecords>
          </template>

          <template #restrictions>
            <CustomerListSingleUserRestrictions></CustomerListSingleUserRestrictions>
          </template>
        </AppTab>
      </div>

      <div class="w-full">
        <CustomerListSingleUserTransactions></CustomerListSingleUserTransactions>
      </div>
    </div>
  </div>
</template>
