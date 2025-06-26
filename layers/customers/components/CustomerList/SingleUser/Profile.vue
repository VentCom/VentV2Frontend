<template>
  <ul
    class="w-full pt-8 border-t border-dashboard-card-border flex-col flex gap-6"
  >
    <!-- email address -->
    <li class="flex justify-between item-center gap-3">
      <div class="flex gap-3 items-center text-dashboard-text-light">
        <i class="w-6 h-6">
          <Icon name="vent:sms" size="1.5rem"></Icon>
        </i>
        <span class="text-sm md:text-base">Email Address</span>
      </div>

      <p class="text-sm md:text-base text-dashboard-heading">
        exa***le@email.com
      </p>
    </li>
    <!-- email address end -->

    <!-- phone number -->
    <li class="flex justify-between item-center gap-3">
      <div class="flex gap-3 items-center text-dashboard-text-light">
        <i class="w-6 h-6">
          <Icon name="vent:call" size="1.5rem"></Icon>
        </i>
        <span class="text-sm md:text-base">Phone</span>
      </div>

      <p
        class="flex items-center gap-1 justify-center group text-sm md:text-base text-dashboard-heading"
      >
        <span class="text-xs md:text-sm"> +23470***678 </span>
        <button
          class="inline-block mt-1 group-hover:text-brand-color-default text-dashboard-text-light"
        >
          <Icon name="vent:copy" size="1.2rem"></Icon>
        </button>
      </p>
    </li>
    <!-- phone number end -->

    <!-- Payouts -->
    <li class="flex justify-between item-center gap-3">
      <div class="flex gap-3 items-center text-dashboard-text-light">
        <i class="w-6 h-6">
          <Icon name="vent:dollar-circle" size="1.5rem"></Icon>
        </i>
        <span class="text-sm md:text-base">Payouts</span>
      </div>

      <p class="text-sm md:text-base text-dashboard-heading">NGN38,000,000</p>
    </li>
    <!-- Payouts end -->

    <!-- Transactions -->
    <li class="flex justify-between item-center gap-3">
      <div class="flex gap-3 items-center text-dashboard-text-light">
        <i class="w-6 h-6">
          <Icon name="vent:hashtag-2" size="1.5rem"></Icon>
        </i>
        <span class="text-sm md:text-base">Transactions Count</span>
      </div>

      <p class="text-sm md:text-base text-dashboard-heading">349</p>
    </li>
    <!-- Transactions end -->

    <!-- Locations -->
    <li class="flex justify-between item-center gap-3">
      <div class="flex gap-3 items-center text-dashboard-text-light">
        <i class="w-6 h-6">
          <Icon name="vent:location" size="1.5rem"></Icon>
        </i>
        <span class="text-sm md:text-base">Location</span>
      </div>

      <p
        class="flex items-center gap-2 justify-center group text-sm md:text-base text-dashboard-heading"
      >
        <img src="/img/ng-flag.svg" class="w-5 h-5 rounded-full" alt="" />
        <span class="text-xs md:text-sm"> Nigeria </span>
      </p>
    </li>
    <!-- Locations end -->

    <!-- Joined since -->
    <li class="flex justify-between item-center gap-3">
      <div class="flex gap-3 items-center text-dashboard-text-light">
        <i class="w-6 h-6">
          <Icon name="vent:calendar-2" size="1.5rem"></Icon>
        </i>
        <span class="text-sm md:text-base">Joined Since</span>
      </div>

      <p class="text-sm md:text-base text-dashboard-heading">November, 2018</p>
    </li>
    <!-- Joined since end -->

    <!-- Wallet Addresses -->
    <li class="flex justify-between item-center gap-3">
      <div class="flex gap-3 items-center text-dashboard-text-light">
        <i class="w-6 h-6">
          <Icon name="vent:hashtag" size="1.5rem"></Icon>
        </i>
        <span class="text-sm md:text-base">Wallet Addresses</span>
      </div>

      <div
        class="flex items-center gap-2 justify-center group text-sm md:text-base text-dashboard-heading"
      >
        <span class="text-xs md:text-sm"> 3 </span>

        <button
          class="w-[18.3px] h-[18.3px] rounded-full bg-brand-color-011 flex items-center justify-center text-brand-color-default"
        >
          <Icon name="vent:arrow-2" size="0.5rem"></Icon>
        </button>
      </div>
    </li>
    <!-- Wallet Addresses end -->

    <!-- Referals -->
    <li class="flex justify-between item-center gap-3">
      <div class="flex gap-3 items-center text-dashboard-text-light">
        <i class="w-6 h-6">
          <Icon name="vent:calendar-2" size="1.5rem"></Icon>
        </i>
        <span class="text-sm md:text-base">Referrals</span>
      </div>

      <p class="text-sm md:text-base text-dashboard-heading">521</p>
    </li>
    <!-- Referals end -->

    <!-- KYC -->
    <li class="flex justify-between item-center gap-3">
      <div class="flex gap-3 items-center text-dashboard-text-light">
        <i class="w-6 h-6">
          <Icon name="vent:security-user" size="1.5rem"></Icon>
        </i>
        <span class="text-sm md:text-base">KYC Verification</span>
      </div>

      <p class="text-sm md:text-base text-dashboard-heading">Tier 3</p>
    </li>
    <!-- KYC end -->

    <!-- Status -->
    <li class="flex justify-between item-center gap-3">
      <div class="flex gap-3 items-center text-dashboard-text-light">
        <i class="w-6 h-6">
          <Icon name="vent:story" size="1.5rem"></Icon>
        </i>
        <span class="text-sm md:text-base">Status</span>
      </div>

      <p class="text-sm md:text-base">
        <AppPills color="green">Active</AppPills>
      </p>
    </li>
    <!-- Status end -->
  </ul>
</template>
