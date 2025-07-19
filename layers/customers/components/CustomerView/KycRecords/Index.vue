<script setup lang="ts"></script>

<template>
  <div
    class="bg-dashboard-bg-darker rounded-xl border border-dashboard-card-border p-2"
  >
    <div class="grid grid-cols-1 gap-3">
      <!-- tier 1 -->
      <CustomerViewKycRecordsCard>
        <CustomerViewKycRecordsCardDetails>
          <AppClipBoard text="+23470***678"></AppClipBoard>
        </CustomerViewKycRecordsCardDetails>
        <CustomerViewKycRecordsCardDetails
          name="Email Address"
          icon="vent:sms"
        ></CustomerViewKycRecordsCardDetails>
      </CustomerViewKycRecordsCard>
      <!-- tier 1 end-->

      <!-- tier 2 -->
      <CustomerViewKycRecordsCard
        name="Proof of Identity"
        icon="vent:keyboard-open"
        :tier="2"
      >
        <CustomerViewKycRecordsCardDetails name="BVN" icon="vent:calculator">
          <AppClipBoard text="+23470***678"></AppClipBoard>
        </CustomerViewKycRecordsCardDetails>
        <CustomerViewKycRecordsCardDetails
          name="Name"
          icon="vent:tag-user"
        ></CustomerViewKycRecordsCardDetails>
      </CustomerViewKycRecordsCard>
      <!-- tier 2 end-->

      <!-- tier 3 -->
      <CustomerViewKycRecordsCard
        name="Enhanced Due Diligence"
        icon="vent:book"
        :tier="3"
      >
        <CustomerViewKycRecordsCardDetails
          name="Liveness Check"
          icon="vent:emoji-happy"
        >
          <div class="flex items-center gap-1 text-brand-color-default">
            <Icon name="vent:verify" size="17px"></Icon>

            <p class="text-dashboard-heading text-[13px]">Competed</p>
          </div>
        </CustomerViewKycRecordsCardDetails>
        <div class="w-full mt-1">
          <CustomerViewKycRecordsCardDetails
            name="Income source"
            icon="vent:leaf"
          >
            Bonds and Investments
          </CustomerViewKycRecordsCardDetails>
        </div>
      </CustomerViewKycRecordsCard>
      <!-- tier 3 end-->
    </div>
  </div>
</template>
