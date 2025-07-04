<script setup lang="ts">
import {
  RedeemerDepositForm,
  RedeemerDepositInstructionCard,
} from "#components";
</script>

<template>
  <div
    class="md:col-span-2 border border-dashboard-card-border rounded-xl p-6 grid grid-cols-1 gap-4"
  >
    <!-- Heading -->
    <div
      class="border-b border-dashboard-card-divider pb-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between"
    >
      <div class="w-full">
        <h2 class="font-bold text-dashboard-heading mb-1 text-base md:text-xl">
          Deposit Redeemer
        </h2>
        <p class="text-[0.813rem]">
          Efficiently handle cases where a user’s deposit fails to reflect in
          their account.
        </p>
      </div>
    </div>
    <!-- Heading end -->

    <!-- instruction -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <RedeemerDepositInstructionCard color="blue" :count="1">
        Provide the user’s transaction details to confirm its existence on the
        Vent platform before redeeming.
      </RedeemerDepositInstructionCard>
      <RedeemerDepositInstructionCard color="rose" :count="2">
        If the transaction exists, no further action is needed. If it doesn't,
        you'll be guided through the next steps.
      </RedeemerDepositInstructionCard>
      <RedeemerDepositInstructionCard color="yellow" :count="3">
        If the transaction is valid, the user’s deposit will be credited. If
        validation fails, please <a href="#">contact the superadmin.</a>
      </RedeemerDepositInstructionCard>
    </div>
    <!-- instruction -->

    <!-- Transaction Details Form -->
    <RedeemerDepositForm></RedeemerDepositForm>
    <!-- Transaction Details Form end-->
  </div>
</template>
