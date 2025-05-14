<script setup lang="ts">
import {
  AppAlertWarning,
  AppCard,
  TransactionSummaryMoreActions,
} from "#components";
</script>

<template>
  <div class="w-full flex flex-col gap-4">
    <AppAlertWarning></AppAlertWarning>

    <AppCard>
      <template #header-left>
        <div class="flex items-center gap-4">
          <h3
            class="font-semibold text-dashboard-heading place-items-center pl-2"
          >
            Transaction Details
          </h3>
        </div>
      </template>

      <template #header-right>
        <button
          class="text-brand-color-default bg-dashboard-bg text-[0.75rem] px-4 py-[11px] rounded-xl border border-brand-color-default hover:bg-brand-color-default hover:text-dashboard-bg"
        >
          Update
        </button>
      </template>

      <template #body>
        <div class="w-full grid grid-cols-2 md:grid-cols-4 gap-5 gap-y-8">
          <!-- transact hash -->
          <div>
            <p
              class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
            >
              Transaction HAsH
            </p>
            <p class="flex items-center gap-1">
              <span>4a32***552b</span>
              <i class="inline-block mt-1 text-brand-color-default">
                <Icon name="vent:external-link" size="1.2rem"></Icon>
              </i>
            </p>
          </div>
          <!-- transact hash end -->

          <!-- reciever wallet -->
          <div>
            <p
              class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
            >
              Receiver Wallet
            </p>
            <p class="flex items-center gap-1">
              <span>TYiN***jmkb</span>
              <button class="inline-block mt-1 text-brand-color-default">
                <Icon name="vent:copy" size="1.2rem"></Icon>
              </button>
            </p>
          </div>
          <!-- reciever wallet end-->

          <!-- amount -->
          <div>
            <p
              class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
            >
              Amount
            </p>
            <p class="flex items-center gap-1">$2300.00</p>
          </div>
          <!-- amount end -->

          <!-- rate -->
          <div>
            <p
              class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
            >
              rate
            </p>
            <p class="flex items-center gap-1">@N1500/$</p>
          </div>
          <!-- rate end-->

          <!-- Payout -->
          <div>
            <p
              class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
            >
              Payout
            </p>
            <p class="flex items-center gap-1">NGN3,000,320.62</p>
          </div>
          <!-- Payout end-->

          <!-- Crypto Network -->
          <div>
            <p
              class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
            >
              Crypto Network
            </p>
            <p class="flex items-center gap-1">USDT(BEP20)</p>
          </div>
          <!-- Crypto Network end-->

          <!-- Time Received -->
          <div>
            <p
              class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
            >
              Time Received
            </p>
            <p class="flex items-center gap-1">Mar 18, 2025 1:42PM</p>
          </div>
          <!-- Time Received end-->

          <!-- Time accepted -->
          <div>
            <p
              class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
            >
              Time accepted
            </p>
            <p class="flex items-center gap-1">Mar 18, 2025 1:42PM</p>
          </div>
          <!-- Time accepted end-->

          <!-- Time Confirmed -->
          <div>
            <p
              class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
            >
              Time Confirmed
            </p>
            <p class="flex items-center gap-1">Mar 18, 2025 1:42PM</p>
          </div>
          <!-- Time Confirmed end-->

          <!-- Status -->
          <div>
            <p
              class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
            >
              Status
            </p>

            <AppPills color="yellow">Pending</AppPills>
          </div>
          <!-- Status end-->
        </div>
      </template>
    </AppCard>
  </div>
</template>
