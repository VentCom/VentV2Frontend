<script setup lang="ts">
import { Title } from "#components";

const permissions = ref([
  {
    title: "Users Management",
    description: "Controls access to user roles, profiles, and admin actions",
    permissions: [
      "Can add new users",
      "Can modify users account",
      "Can change a user bio-data",
    ],
  },
  {
    title: "Transactions Management",
    description:
      "Manage permissions for viewing and handling transaction records",
    permissions: [
      "Can view transactions",
      "Can modify transaction details",
      "Can decline transactions",
    ],
  },
  {
    title: "Settlements and Restriction",
    description: "Allow or restrict creation and management of settlements",
    permissions: [
      "Can view settlements",
      "Can modify settlements",
      "Can update settlement account",
      "Can place settlements on restriction",
      "Can lift settlement restrictions",
    ],
  },
]);
</script>

<template>
  <div class="grid grid-cols-1 gap-4">
    <ConfigAccessGroupsPermissionsCard
      v-for="(permission, index) in permissions"
      :key="index"
      v-bind="permission"
    ></ConfigAccessGroupsPermissionsCard>
  </div>
</template>
