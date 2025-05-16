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
    <ConfigAccessGroupsUsersInvite></ConfigAccessGroupsUsersInvite>

    <AppTab defaultTabId="members" :showIcon="false" showCount :tabList="tabs">
      <template #members>
        <div class="overflow-x-auto w-full">
          <ConfigAccessGroupsUsersMembers></ConfigAccessGroupsUsersMembers>
        </div>
      </template>

      <template #pending-invites>
        <div class="overflow-x-auto w-full">
          <ConfigAccessGroupsUsersPendingInvites></ConfigAccessGroupsUsersPendingInvites>
        </div>
      </template>
    </AppTab>
  </div>
</template>
