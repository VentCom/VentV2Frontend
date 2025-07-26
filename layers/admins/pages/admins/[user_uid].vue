<script setup lang="ts">
import {
  AdminListSingleUserPersonalInformation,
  AdminListSingleUserProfileCard,
} from "#components";
import type { TabsData } from "~/utils/types/misc/Tabs";

const links = ref([
  {
    name: "Admins",
    route: "/admins",
  },
  {
    name: "Admins’s Information",
    route: "/admins/[user_uid]",
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
    <div class="w-full flex flex-col gap-5">
      <AppBreadcrumb :list="links"></AppBreadcrumb>

      <AdminListSingleUserProfileCard></AdminListSingleUserProfileCard>

      <div class="w-full border border-dashboard-card-border rounded-2xl p-6">
        <AdminListSingleUserWorktimeSummary></AdminListSingleUserWorktimeSummary>
      </div>

      <div class="w-full">
        <AdminListSingleUserTransactions></AdminListSingleUserTransactions>
      </div>
    </div>

    <!-- sidebar -->
    <div class="max-w-[421px] w-full flex flex-col gap-5">
      <div
        class="w-full border border-dashboard-card-border rounded-[16px] p-5 flex flex-col gap-4"
      >
        <h2 class="text-dashboard-heading text-base font-semibold w-full">
          Personal Information
        </h2>
        <AdminListSingleUserPersonalInformation></AdminListSingleUserPersonalInformation>
      </div>

      <div
        class="w-full border border-dashboard-card-border rounded-[16px] p-5 flex flex-col gap-4"
      >
        <h2
          class="text-dashboard-heading text-base font-semibold w-full flex items-center gap-2"
        >
          Devices Used

          <span
            class="inline-block px-2 py-1 rounded-[5px] border text-[13px] font-regular border-dashboard-card-border"
          >
            3
          </span>
        </h2>
        <AdminListSingleUserDevices></AdminListSingleUserDevices>
      </div>

      <div
        class="w-full border border-dashboard-card-border rounded-[16px] p-5 flex flex-col gap-4"
      >
        <h2
          class="text-dashboard-heading text-base font-semibold w-full flex items-center gap-2"
        >
          Session Logs

          <span
            class="inline-block px-2 py-1 rounded-[5px] border text-[13px] font-regular border-dashboard-card-border"
          >
            2
          </span>
        </h2>
        <AdminListSingleUserSessionLogs></AdminListSingleUserSessionLogs>
      </div>
    </div>
    <!-- sidebar end -->
  </div>
</template>
