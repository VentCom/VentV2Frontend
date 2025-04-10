<script setup lang="ts">
import { AppButton, AppPills } from "#components";

const updateTransaction = ref({
  showDialogBox: () => {},
  hideDialogBox: () => {},
});
</script>

<template>
  <Teleport to="body">
    <AppModal ref="updateTransaction"></AppModal>
  </Teleport>

  <AppCard>
    <template #header-left>
      <div class="flex items-center gap-4">
        <h3
          class="font-semibold text-dashboard-heading place-items-center pl-2"
        >
          Transaction Details
        </h3>
        <span class="text-sm">
          <AppPills color="yellow">Pending</AppPills>
        </span>
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
      <div class="w-full shrink-0 grid grid-cols-2 gap-5 gap-y-8">
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

        <!-- Crypto Network -->
        <div>
          <p
            class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
          >
            Crypto Network
          </p>
          <p class="flex items-center gap-1">USDT(BEP20)</p>
        </div>
        <!-- Crypto Network end -->

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

        <!-- Payout -->
        <div>
          <p
            class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
          >
            Settlement
          </p>
          <p class="flex items-center gap-1">NGN3,000,320.62</p>
        </div>
        <!-- Payout end-->

        <!-- transact hash -->
        <div>
          <p
            class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
          >
            Transaction HAsH
          </p>
          <p class="flex items-center gap-1">
            <span>4a32***552b</span>
            <i class="inline-block mt-1">
              <Icon name="vent:external-link" size="1.2rem"></Icon>
            </i>
          </p>
        </div>
        <!-- transact hash end -->

        <!-- Market Value -->
        <div>
          <p
            class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
          >
            Market Value
          </p>
          <p class="flex items-center gap-1">$1/USDT</p>
        </div>
        <!-- Market Value end-->

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
      </div>
    </template>
  </AppCard>
</template>
