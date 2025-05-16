<script lang="ts" setup>
import type { TabsData } from "~/utils/types/misc/Tabs";

definePageMeta({
  pageTransition: { name: "page-zoom", mode: "out-in" },
});

const newRoleModal = ref({
  showDialogBox: () => {},
  hideDialogBox: () => {},
});

const tabs: TabsData[] = [
  {
    name: "Roles",
    icon: "vent:mask",
    id: "roles",
    counts: 0,
  },
  {
    name: "Permissions",
    icon: "vent:security-user",
    id: "permissions",
    counts: 0,
  },
  {
    name: "Users",
    icon: "vent:profile-2user",
    id: "users",
    counts: 0,
  },
];
</script>
<template>
  <div>
    <!-- heading -->
    <div
      class="w-full mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
    >
      <Teleport to="body">
        <ConfigAccessGroupsRolesNewModal ref="newRoleModal">
        </ConfigAccessGroupsRolesNewModal>
      </Teleport>

      <div class="w-full md:w-auto">
        <h2 class="font-bold text-dashboard-heading mb-1 text-xl md:text-2xl">
          Access Groups
        </h2>
        <p class="text-[0.813rem] text-dashboard-text">
          Define what each team member can access and control by assigning
          specific roles and permissions
        </p>
      </div>

      <div class="w-full flex justify-end md:w-auto gap-3 items-center">
        <button
          class="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-dashboard-bg-dark text-dashboard-heading"
        >
          <icon name="vent:search-normal-2" size="1.5rem"></icon>
        </button>
        <span
          class="h-[20px] border-dashboard-card-border border-r block"
        ></span>
        <AppDropdown :widthIsFinite="false" position="right">
          <template #default>
            <button
              class="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-brand-color-default hover:bg-brand-color-005 text-white"
            >
              <icon name="vent:add" size="1.5rem"></icon>
            </button>
          </template>

          <template #dropdown_body>
            <ul class="w-[265px] flex flex-col gap-2">
              <li class="w-full">
                <button
                  @click="newRoleModal.showDialogBox()"
                  class="border w-full border-dashboard-card-divider rounded-md px-5 py-3 flex items-center gap-2 text-dashboard-heading hover:text-brand-color-default hover:border-brand-color-default"
                >
                  <icon name="vent:add" size="1.5rem"></icon>
                  <span class="text-base">New Role</span>
                </button>
              </li>
              <li class="w-full border-b border-dashboard-card-divider"></li>
              <li class="w-full">
                <button
                  class="border w-full border-dashboard-card-divider rounded-md px-5 py-3 flex items-center gap-2 text-dashboard-heading hover:text-brand-color-default hover:border-brand-color-default"
                >
                  <icon name="vent:send-2" size="1.5rem"></icon>
                  <span class="text-base">Send Invites</span>
                </button>
              </li>
            </ul>
          </template>
        </AppDropdown>
      </div>
    </div>
    <!-- heading end-->

    <div class="grid grid-cols-1 gap-8">
      <AppTab :defaultTabId="'roles'" showCount :tabList="tabs">
        <template #roles>
          <div class="overflow-x-auto overflow-y-visible">
            <ConfigAccessGroupsRolesRoleLIst></ConfigAccessGroupsRolesRoleLIst>
          </div>
        </template>

        <template #permissions>
          <ConfigAccessGroupsPermissions></ConfigAccessGroupsPermissions>
        </template>

        <template #users>
          <ConfigAccessGroupsUsers></ConfigAccessGroupsUsers>
        </template>
      </AppTab>
    </div>
  </div>
</template>
