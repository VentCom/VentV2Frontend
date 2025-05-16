<script setup lang="ts">
import type { TabsData } from "~/utils/types/misc/Tabs";

const isCollapsed = ref(false);

const isOpen = ref<boolean>(false);

const showDialogBox = () => {
  document.querySelector("body")?.classList.add("overflow-hidden");
  isOpen.value = true;
};

const hideDialogBox = () => {
  document.querySelector("body")?.classList.remove("overflow-hidden");
  isOpen.value = false;
};

const toggleCollapsable = () => {
  isCollapsed.value = !isCollapsed.value;
};

const permissions = ref([
  {
    title: "Users Management",
    description: "Controls access to user roles, profiles, and admin actions",
    permissions: [
      {
        title: "Can add new users",
        id: "Can_add_new_users",
      },
      {
        title: "Can modify users account",
        id: "Can_modify_users_account",
      },
      {
        title: "Can change a user bio-data",
        id: "Can_change_a_user_bio-data",
      },
    ],
  },
  {
    title: "Transactions Management",
    description:
      "Manage permissions for viewing and handling transaction records",
    permissions: [
      {
        title: "Can view transactions",
        id: "Can_view_transactions",
      },
      {
        title: "Can modify transaction details",
        id: "Can_modify_transaction_details",
      },
      {
        title: "Can decline transactions",
        id: "Can_decline_transactions",
      },
    ],
  },
]);

const tabs: TabsData[] = [
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

defineExpose({
  showDialogBox,
  hideDialogBox,
});
</script>

<template>
  <Transition name="slideUp">
    <div
      v-if="isOpen"
      class="w-full h-screen fixed top-0 left-0 bg-white flex flex-col font-body z-[300]"
      tabindex="0"
      @keydown.prevent.esc="hideDialogBox()"
    >
      <div class="w-full flex justify-end items-center py-10 md:px-10 px-5">
        <button
          class="border flex border-dashboard-card-border rounded-full w-[32px] h-[32px] items-center justify-center hover:text-brand-color-default hover:border-brand-color-default"
          @click="hideDialogBox()"
        >
          <icon name="vent:x" size="1rem"></icon>
        </button>
      </div>
      <div class="grow px-5 overflow-auto pb-10">
        <div class="max-w-[1008px] mx-auto flex flex-col w-full gap-10">
          <div class="w-full md:w-auto">
            <h2
              class="font-bold text-dashboard-heading mb-1 text-xl md:text-4xl"
            >
              Edit Role
            </h2>
            <p class="text-[0.813rem] text-dashboard-text">
              Customize roles and control permissions to align with your team’s
              responsibilities.
            </p>
          </div>

          <AppInputContainer label="Name of Role">
            <input type="text" placeholder="Give role a name" />
          </AppInputContainer>

          <div class="flex flex-col gap-5">
            <div class="w-full mb-5">
              <h3
                class="font-semibold text-dashboard-heading mb-1 text-base md:text-xl"
              >
                Manage Permissions
              </h3>
              <p class="text-[0.813rem] text-dashboard-text">
                Manage who can see, do, and change what — all in one place.
              </p>
            </div>

            <AppTab :defaultTabId="'permissions'" showCount :tabList="tabs">
              <template #permissions>
                <div class="w-full collapsable" :class="{ show: !isCollapsed }">
                  <div>
                    <button
                      @click="toggleCollapsable"
                      class="flex justify-between items-center border border-input-border px-5 py-4 w-full cursor-pointer"
                    >
                      <span class="text-dashboard-text">Select Permission</span>
                      <icon
                        name="vent:arrow-down"
                        size="1.5rem"
                        class="transition-all duration-300 ease-in-out"
                        :class="{
                          'rotate-180': !isCollapsed,
                        }"
                      ></icon>
                    </button>
                  </div>
                  <div class="collapsable-content">
                    <!-- permission Groups -->
                    <div class="grid grid-cols-1 gap-5">
                      <ConfigAccessGroupsPermissionsGroupCard
                        v-for="(permission, index) in permissions"
                        :key="index"
                        v-bind="permission"
                      />
                    </div>
                    <!-- permission Groups end-->

                    <!-- not found -->
                    <!-- <div class="border min-h-[60vh] border-dashboard-card-border" ></div> -->
                    <!-- not found end -->
                  </div>
                </div>
              </template>

              <template #users>
                <ConfigAccessGroupsRolesEditUsers></ConfigAccessGroupsRolesEditUsers>
              </template>
            </AppTab>
          </div>

          <!-- Submit button -->
          <div class="w-full flex justify-end gap-3">
            <AppButton :block="false" color="neutral">Cancel</AppButton>
            <AppButton :block="false">Save</AppButton>
          </div>
          <!-- Submit button end-->
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.collapsable {
  display: grid;
  grid-template-rows: auto 0fr;
  grid-template-columns: 1fr;
  transition: grid-template-rows 0.3s ease;
  overflow: hidden;
}

.collapsable.show {
  grid-template-rows: auto 1fr !important;
  gap: 16px;
}

.collapsable-content {
  overflow: hidden;
}
</style>
