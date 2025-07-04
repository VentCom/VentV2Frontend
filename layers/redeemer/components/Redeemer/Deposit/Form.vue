<script setup lang="ts">
import { AppInputContainer } from "#components";
</script>

<template>
  <div
    class="border border-dashboard-card-border rounded-xl p-6 grid grid-cols-1 gap-4"
  >
    <div class="flex items-center gap-2">
      <div
        class="w-8 h-8 border border-dashboard-card-border rounded-[8px] bg-dashboard-bg-darker flex items-center justify-center"
      >
        <Icon
          name="vent:box-search"
          class="text-dashboard-heading"
          size="1rem"
        ></Icon>
      </div>

      <p class="text-[13px] text-dashboard-heading-blue">Transaction Details</p>
    </div>

    <div class="w-full grid grid-cols-1 gap-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AppInputContainer label="Currency">
          <div class="flex items-center justify-between w-full">
            <span class="text-input-placeholder font-medium"
              >Select currency</span
            >

            <i>
              <Icon name="vent:arrow-down" size="1.3rem"></Icon>
            </i>
          </div>
        </AppInputContainer>

        <AppInputContainer label="Crypto Network">
          <div class="flex items-center justify-between w-full">
            <span class="text-input-placeholder font-medium"
              >Select network</span
            >

            <i>
              <Icon name="vent:arrow-down" size="1.3rem"></Icon>
            </i>
          </div>
        </AppInputContainer>

        <AppInputContainer can-paste label="Transaction Hash">
          <input
            class="canPaste"
            placeholder="Enter transaction hash"
            type="text"
          />
        </AppInputContainer>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AppInputContainer can-paste label="Receiver Address">
          <input
            class="canPaste"
            placeholder="Enter receiver address"
            type="text"
          />
        </AppInputContainer>

        <AppInputContainer can-paste label="Email Address">
          <input
            class="canPaste"
            placeholder="Enter email address"
            type="email"
          />
        </AppInputContainer>
      </div>

      <div>
        <div class="w-[196px]">
          <AppButton block>Redeem</AppButton>
        </div>
      </div>
    </div>
  </div>
</template>
