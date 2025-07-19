<script setup lang="ts">
import {
  CustomerViewKycRecords,
  CustomerViewMiniProfileCard,
  CustomerViewPersonalInformation,
  CustomerViewSectionCard,
  CustomerViewTransactions,
  CustomerViewWalletAddresses,
} from "#components";

const { singleCustomerView } = useCustomerConfig();
</script>

<template>
  <CustomerViewLayout>
    <template #full-view>
      <CustomerViewProfileCard></CustomerViewProfileCard>

      <div class="border border-dashboard-card-border rounded-2xl p-5">
        <h1 class="font-semibold text-dashboard-heading text-xl mb-5">
          Transactions Record
        </h1>
        <CustomerViewTransactions></CustomerViewTransactions>
      </div>
    </template>

    <template #mini-view-only>
      <CustomerViewMiniProfileCard></CustomerViewMiniProfileCard>
    </template>

    <template #mini-view>
      <CustomerViewSectionCard title="Personal Information">
        <CustomerViewPersonalInformation></CustomerViewPersonalInformation>
      </CustomerViewSectionCard>

      <CustomerViewSectionCard
        v-if="singleCustomerView === CustomerView.MINIMAL"
        title="Transactions"
      >
        <CustomerViewTransactions></CustomerViewTransactions>
      </CustomerViewSectionCard>

      <CustomerViewSectionCard title="Bank Details">
        <CustomerViewBankDetails></CustomerViewBankDetails>
      </CustomerViewSectionCard>

      <CustomerViewSectionCard title="Wallet Addresses">
        <CustomerViewWalletAddresses></CustomerViewWalletAddresses>
      </CustomerViewSectionCard>

      <CustomerViewSectionCard title="KYC Records">
        <CustomerViewKycRecords></CustomerViewKycRecords>
      </CustomerViewSectionCard>

      <CustomerViewSectionCard title="Restrictions">
        <CustomerViewRestrictions></CustomerViewRestrictions>
      </CustomerViewSectionCard>
    </template>
  </CustomerViewLayout>
</template>
