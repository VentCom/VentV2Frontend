<script lang="ts" setup>
import {
  AppModal,
  LazyConfigAccessGroupsRolesConfirmRevokePermission,
} from "#components";

const revokePermissionModal = ref({
  showDialogBox: () => {},
  hideDialogBox: () => {},
});

const deleteRoleModal = ref({
  showDialogBox: () => {},
  hideDialogBox: () => {},
});

const editRoleModal = ref({
  showDialogBox: () => {},
  hideDialogBox: () => {},
});

const revokePermission = () => {
  revokePermissionModal.value.showDialogBox();
};
const deleteRole = () => {
  deleteRoleModal.value.showDialogBox();
};

const editRole = () => {
  editRoleModal.value.showDialogBox();
};
</script>
<template>
  <Teleport to="body">
    <AppModal ref="revokePermissionModal">
      <LazyConfigAccessGroupsRolesConfirmRevokePermission />
    </AppModal>
    <AppModal ref="deleteRoleModal">
      <ConfigAccessGroupsRolesConfirmDeleteRole />
    </AppModal>

    <ConfigAccessGroupsRolesEdit ref="editRoleModal" />
  </Teleport>

  <table class="w-full text-xs md:text-sm">
    <thead>
      <tr class="text-dashboard-text font-bold bg-[#F8F9FC]">
        <th class="text-left px-4 py-4">Name</th>
        <th class="text-center px-4 py-4">Permissions</th>
        <th class="text-left px-4 py-4">Users</th>
        <th class="text-left px-4 py-4">Date Created</th>
        <th class="text-left px-4 py-4">Last Updated</th>
        <th class="flex justify-end px-4 py-4">More</th>
      </tr>

      <tr class="">
        <th colspan="6" class="py-1"></th>
      </tr>
    </thead>
    <tbody class="text-dashboard-text">
      <template v-for="(row, index) in 4" :key="index">
        <tr class="">
          <td
            class="border border-r-0 border-dashboard-card-border rounded-l-xl h-full p-4"
          >
            <ul class="flex items-center gap-1 text-dashboard-heading">
              <li class="w-7 h-7 block">
                <img src="/img/role-icon.svg" class="w-full" alt="role" />
              </li>
              <li class="text-sm md:text-base">
                <span class="whitespace-nowrap">Super Admin</span>
              </li>
            </ul>
          </td>
          <td
            class="p-4 border-y border-dashboard-card-border text-center text-sm"
          >
            <AppPills color="green">12</AppPills>
          </td>
          <td class="p-4 border-y border-dashboard-card-border">
            <ul class="inline-flex w-auto items-center gap-1">
              <li
                class="w-7 h-7 rounded-full border-2 border-[#FFFFFF] first:ml-0 -ml-5 block overflow-hidden"
              >
                <span
                  class="flex items-center justify-center w-full h-full bg-[#CCEEFF] text-[#001119] text-[9px]"
                  >PA</span
                >
              </li>
              <li
                class="w-7 h-7 rounded-full border-2 border-[#FFFFFF] first:ml-0 -ml-5 block overflow-hidden"
              >
                <span
                  class="flex items-center justify-center w-full h-full bg-[#CCCCFF] text-[#001119] text-[9px]"
                  >NS</span
                >
              </li>
              <li
                class="w-7 h-7 rounded-full border-2 border-[#FFFFFF] first:ml-0 -ml-5 block overflow-hidden"
              >
                <span
                  class="flex items-center justify-center w-full h-full bg-[#FFDFCC] text-[#001119] text-[9px]"
                  >DS</span
                >
              </li>
              <li
                class="w-7 h-7 rounded-full border-2 border-[#FFFFFF] first:ml-0 -ml-5 block overflow-hidden"
              >
                <span
                  class="flex items-center justify-center w-full h-full bg-[#001119] text-white text-[9px]"
                  >12+</span
                >
              </li>
            </ul>
          </td>
          <td
            class="p-4 border-y border-dashboard-card-border text-dashboard-text whitespace-nowrap"
          >
            May 8, 2025 5:13PM
          </td>
          <td
            class="p-4 border-y border-dashboard-card-border whitespace-nowrap"
          >
            May 8, 2025 5:13PM
          </td>
          <td
            class="p-4 border border-l-0 border-dashboard-card-border rounded-r-xl h-full"
          >
            <div class="flex justify-end">
              <AppDropdown :widthIsFinite="false" position="right">
                <template #default>
                  <button
                    class="text-dashboard-heading hover:text-brand-color-default cursor-pointer"
                  >
                    <icon name="vent-more" size="1.4rem"></icon>
                  </button>
                </template>

                <template #dropdown_body>
                  <ul
                    class="w-[265px] flex flex-col gap-2 p-3 border border-dashboard-card-divider"
                  >
                    <li class="w-full">
                      <button
                        @click="editRole"
                        class="border-b w-full border-dashboard-card-divider px-5 py-3 flex items-center gap-2 text-dashboard-heading hover:text-brand-color-default hover:border-brand-color-default"
                      >
                        <icon name="vent:edit-hollow" size="1.5rem"></icon>
                        <span class="text-base">Edit Role</span>
                      </button>
                    </li>
                    <li class="w-full">
                      <button
                        @click="deleteRole"
                        class="border-b w-full border-dashboard-card-divider text-[#FF5E00] px-5 py-3 flex items-center gap-2 cursor-pointer"
                      >
                        <icon name="vent:trash" size="1.5rem"></icon>
                        <span class="text-base">Delete Row</span>
                      </button>
                    </li>

                    <li class="w-full">
                      <button
                        @click="revokePermission"
                        class="w-full border-dashboard-card-divider px-5 py-3 flex items-center gap-2 text-[#FF5E00] cursor-pointer"
                      >
                        <icon
                          name="vent:info-circle-outlined"
                          size="1.5rem"
                        ></icon>
                        <span class="text-base">Revoke Permissions</span>
                      </button>
                    </li>
                  </ul>
                </template>
              </AppDropdown>
            </div>
          </td>
        </tr>
        <tr class="">
          <th colspan="6" class="py-1"></th>
        </tr>
      </template>
    </tbody>
  </table>
</template>
