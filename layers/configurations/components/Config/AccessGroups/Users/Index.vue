<script setup lang="ts">
const tabs = [
  {
    name: "Members",
    icon: "",
    id: "members",
    counts: 0,
  },
  {
    name: "Pending Invites",
    icon: "",
    id: "pending-invites",
    counts: 0,
  },
];
</script>
<template>
  <div class="grid grid-cols-1 gap-8">
    <!-- <ConfigAccessGroupsUsersInvite></ConfigAccessGroupsUsersInvite> -->

    <div class="overflow-x-auto w-full">
      <ConfigAccessGroupsUsersMembers></ConfigAccessGroupsUsersMembers>
    </div>

    <AppCollapsable>
      <template #header-left>
        <div class="inline-flex items-center gap-2">
          <h3 class="font-medium text-dashboard-text-light">Pending Invites</h3>
          <span
            class="border border-dashboard-card-divider rounded-lg p-2 py-1 text-xs inline-block mb-1"
          >
            0
          </span>
        </div>
      </template>
      <template #body>
        <div class="overflow-x-auto w-full">
          <ConfigAccessGroupsUsersPendingInvites></ConfigAccessGroupsUsersPendingInvites>
        </div>
      </template>
    </AppCollapsable>
  </div>
</template>
