<script setup lang="ts">
import { AppButton, ConfigAccessGroupsUsersAssignRoleModal } from "#components";

const assignRoleModal = ref({
  showDialogBox: () => {},
  hideDialogBox: () => {},
});

const assignRole = () => {
  assignRoleModal.value.showDialogBox();
};
</script>

<template>
  <Teleport to="body">
    <ConfigAccessGroupsUsersAssignRoleModal
      ref="assignRoleModal"
    ></ConfigAccessGroupsUsersAssignRoleModal>
  </Teleport>

  <div class="border border-dashboard-card-border">
    <div
      class="px-5 py-5 border-b border-dashboard-card-border flex items-center justify-between"
    >
      <h2 class="text-dashboard-heading font-medium text-base">
        Invite new members by email address
      </h2>

      <button
        class="px-4.5 py-3.5 flex items-center gap-2 border border-dashboard-card-border rounded-full"
      >
        <icon name="vent:link" size="1.3rem"></icon>
        <span>Copy Link</span>
      </button>
    </div>

    <!-- Select Role form -->
    <div class="px-5 py-5">
      <div class="flex flex-col-reverse md:flex-row gap-3">
        <div
          class="inline-flex items-center gap-3 rounded-full border border-dashboard-card-border grow px-3 py-2.5 overflow-x-auto"
        >
          <span
            v-for="(group, index) in 5"
            class="inline-flex bg-dashboard-text-light/5 max-w-100 w-full items-center gap-2 border text-dashboard-heading text-[0.813rem] border-dashboard-card-border rounded-full px-3 py-1 group whitespace-nowrap"
          >
            snkeze9@gmail.com
            <button
              class="m-0 p-0 w-4 h-4 rounded-full flex items-center justify-center border bg-dashboard-bg border-dashboard-card-border"
            >
              <icon
                name="vent:close"
                class="group-hover:text-orange-default transition-colors duration-300 ease-in-out"
                size="0.8rem"
              ></icon>
            </button>
          </span>
        </div>
        <div class="shrink-0 flex gap-3">
          <button
            class="py-3.5 px-5 bg-white border border-dashboard-card-border rounded-full w-full md:w-[201px] flex items-center justify-between text-dashboard-heading hover:border-brand-color-default shadow-2xl shadow-transparent hover:shadow-brand-color-011/40 transition-colors duration-300 ease-in-out"
          >
            <span class="text-dashboard-text-light">Select Role</span>
            <icon name="vent:arrow-down" size="1.2rem"></icon>
          </button>

          <button
            class="w-[54px] aspect-square flex items-center justify-center border border-dashboard-card-border shrink-0 text-dashboard-heading rounded-full hover:border-brand-color-default hover:text-brand-color-default transition-colors duration-300 ease-in-out"
            @click="assignRole"
          >
            <icon name="vent:setting-2" size="1.2rem"></icon>
          </button>

          <div class="flex items-center">
            <span
              class="block h-6 border-r-2 border-dashboard-card-divider"
            ></span>
          </div>

          <AppButton outlined fullRounded :block="false">
            <icon name="vent:send-2" size="1.2rem"></icon>
            Send Invite</AppButton
          >
        </div>
      </div>
    </div>
    <!-- Select Role form end -->

    <!-- permission groups -->
    <div class="px-5 pb-5">
      <h3 class="text-dashboard-text-light text-[0.813rem] font-medium">
        Permission Groups
      </h3>
      <div class="flex items-center gap-3 flex-wrap mt-2">
        <span
          v-for="(group, index) in 3"
          class="flex items-center gap-2 border text-dashboard-heading text-[0.813rem] border-dashboard-card-border rounded-full px-3 py-1 group"
        >
          Users Management
          <button class="m-0 p-0 w-4 h-4 flex items-center justify-center">
            <icon
              name="vent:close"
              class="group-hover:text-orange-default transition-colors duration-300 ease-in-out"
              size="0.8rem"
            ></icon>
          </button>
        </span>
      </div>
    </div>
    <!-- permission groups end -->
  </div>
</template>
