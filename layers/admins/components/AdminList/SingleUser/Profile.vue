<script setup lang="ts">
import AppModal from "~/components/App/Modal.vue";

const devicesModalRef = ref<InstanceType<typeof AppModal>>();
</script>
<template>
  <Teleport to="body">
    <AppModal ref="devicesModalRef" desktop-width="874px" hide-pattern>
      <AdminListSingleUserModalsDevices />
    </AppModal>
  </Teleport>
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

    <!-- Role -->
    <li class="flex justify-between item-center gap-3">
      <div class="flex gap-3 items-center text-dashboard-text-light">
        <i class="w-6 h-6">
          <Icon name="vent:profile" size="1.5rem"></Icon>
        </i>
        <span class="text-sm md:text-base">Role</span>
      </div>

      <p class="text-sm md:text-base text-dashboard-heading">Admin</p>
    </li>
    <!-- Role end -->

    <!-- Transactions -->
    <li class="flex justify-between item-center gap-3">
      <div class="flex gap-3 items-center text-dashboard-text-light">
        <i class="w-6 h-6">
          <Icon name="vent:hashtag-2" size="1.5rem"></Icon>
        </i>
        <span class="text-sm md:text-base">Settlements</span>
      </div>

      <p class="text-sm md:text-base text-dashboard-heading">349</p>
    </li>
    <!-- Transactions end -->

    <!-- Devices -->
    <li class="flex justify-between item-center gap-3">
      <div class="flex gap-3 items-center text-dashboard-text-light">
        <i class="w-6 h-6">
          <Icon name="vent:mobile" size="1.5rem"></Icon>
        </i>
        <span class="text-sm md:text-base">Devices</span>
      </div>

      <div
        class="flex items-center gap-2 justify-center group text-sm md:text-base text-dashboard-heading"
      >
        <span class="text-xs md:text-sm"> 3 </span>

        <button
          @click="devicesModalRef?.showDialogBox()"
          class="w-[18.3px] h-[18.3px] rounded-full bg-brand-color-011 flex items-center justify-center text-brand-color-default"
        >
          <Icon name="vent:arrow-2" size="0.5rem"></Icon>
        </button>
      </div>
    </li>
    <!-- Devices end -->

    <!-- Session Logs -->
    <li class="flex justify-between item-center gap-3">
      <div class="flex gap-3 items-center text-dashboard-text-light">
        <i class="w-6 h-6">
          <Icon name="vent:hashtag-2" size="1.5rem"></Icon>
        </i>
        <span class="text-sm md:text-base">Session Logs</span>
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
    <!-- Session Logs end -->

    <!-- Joined since -->
    <li class="flex justify-between items-start gap-3">
      <div class="flex gap-3 items-center text-dashboard-text-light shrink-0">
        <i class="w-6 h-6">
          <Icon name="vent:calendar-2" size="1.5rem"></Icon>
        </i>
        <span class="text-sm md:text-base">Joined Since</span>
      </div>

      <p
        class="text-sm md:text-base text-dashboard-heading shrink-0 text-right w-[50%]"
      >
        Wednesday, 25 June, 2025 9:03 AM
      </p>
    </li>
    <!-- Joined since end -->

    <!-- Last login since -->
    <li class="flex justify-between items-start gap-3">
      <div class="flex gap-3 items-center text-dashboard-text-light shrink-0">
        <i class="w-6 h-6">
          <Icon name="vent:clock" size="1.5rem"></Icon>
        </i>
        <span class="text-sm md:text-base">Last Login</span>
      </div>

      <p
        class="text-sm md:text-base text-dashboard-heading shrink-0 text-right w-[50%]"
      >
        Wednesday, 25 June, 2025 9:03 AM
      </p>
    </li>
    <!-- Last login since end -->

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

    <!-- Password Reset -->
    <li class="flex justify-between item-center gap-3">
      <div class="flex gap-3 items-center text-dashboard-text-light">
        <i class="w-6 h-6">
          <Icon name="vent:security-user" size="1.5rem"></Icon>
        </i>
        <span class="text-sm md:text-base">Password</span>
      </div>

      <button class="text-sm md:text-base cursor-pointer">
        <AppPills color="blue">
          <span class="flex items-center gap-2">
            Reset
            <Icon name="vent:arrow-2" size="0.5rem"></Icon>
          </span>
        </AppPills>
      </button>
    </li>
    <!-- Password Reset end -->
  </ul>
</template>
