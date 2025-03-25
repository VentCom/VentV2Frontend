<script setup lang="ts">
import { AppButton, AppPills } from "#components";
</script>

<template>
  <div
    class="border border-dashboard-card-border p-6 py-10 md:p-10 w-full flex flex-col gap-4"
  >
    <h3 class="font-semibold text-dashboard-heading text-xl mb-4">
      Transaction Details
    </h3>

    <div class="flex flex-col md:flex-row gap-4 gap-y-10">
      <div class="w-full flex flex-col gap-4">
        <div>
          <ul class="flex items-center gap-2">
            <li
              class="font-semibold text-dashboard-heading text-3xl md:text-4xl"
            >
              $2,300
            </li>
            <li>
              <h3
                class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading"
              >
                Worth of
              </h3>
              <p
                class="text-dashboard-heading font-bold text-sm uppercase md:text-xl -mt-1.5"
              >
                USDT
              </p>
            </li>
          </ul>

          <p
            class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mt-1"
          >
            valued at 0.00000320usdt
          </p>
        </div>

        <div class="mt-auto flex justify-end md:justify-start">
          <AppButton>Update</AppButton>
        </div>
      </div>

      <div class="w-full md:w-[400px] shrink-0 grid grid-cols-2 gap-5 gap-y-8">
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
    </div>
  </div>
</template>
