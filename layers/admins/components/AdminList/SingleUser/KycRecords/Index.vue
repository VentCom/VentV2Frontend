<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
    <CustomerListSingleUserKycRecordsCard>
      <CustomerListSingleUserKycRecordsCardDetails>
        <AppClipBoard text="+23470***678"></AppClipBoard>
      </CustomerListSingleUserKycRecordsCardDetails>
      <CustomerListSingleUserKycRecordsCardDetails
        name="Email Address"
        icon="vent:sms"
      ></CustomerListSingleUserKycRecordsCardDetails>
    </CustomerListSingleUserKycRecordsCard>

    <CustomerListSingleUserKycRecordsCard
      name="Proof of Identity"
      icon="vent:keyboard-open"
      :tier="2"
    >
      <CustomerListSingleUserKycRecordsCardDetails
        name="BVN"
        icon="vent:calculator"
      >
        <AppClipBoard text="+23470***678"></AppClipBoard>
      </CustomerListSingleUserKycRecordsCardDetails>
      <CustomerListSingleUserKycRecordsCardDetails
        name="Name"
        icon="vent:tag-user"
      ></CustomerListSingleUserKycRecordsCardDetails>
    </CustomerListSingleUserKycRecordsCard>

    <CustomerListSingleUserKycRecordsCard
      name="Enhanced Due Diligence"
      icon="vent:book"
      :tier="3"
    >
      <CustomerListSingleUserKycRecordsCardDetails
        name="Liveness Check"
        icon="vent:emoji-happy"
      >
        <div class="flex items-center gap-1 text-brand-color-default">
          <Icon name="vent:verify" size="17px"></Icon>

          <p class="text-dashboard-heading text-[13px]">Competed</p>
        </div>
      </CustomerListSingleUserKycRecordsCardDetails>
      <div class="w-full mt-1">
        <CustomerListSingleUserKycRecordsCardDetails
          name="Income source"
          icon="vent:leaf"
        >
          Bonds and Investments
        </CustomerListSingleUserKycRecordsCardDetails>
      </div>
    </CustomerListSingleUserKycRecordsCard>
  </div>
</template>
