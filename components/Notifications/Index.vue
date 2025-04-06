<script setup lang="ts">
import { Notifications, NotificationsBody } from "#components";
import type { TabsData } from "~/utils/types/misc/Tabs";

const tabs = ref<TabsData[]>([
  {
    icon: "",
    name: "All",
    id: "all",
    counts: 3,
  },
  {
    icon: "",
    name: "Unread",
    id: "unread",
    counts: 3,
  },
  {
    icon: "",
    name: "Read",
    id: "read",
    counts: 3,
  },
]);
</script>
<template>
  <h2 class="text-dashboard-heading font-semibold text-xl md:text-3xl mb-5">
    Notifications
  </h2>

  <AppTab :tabList="tabs" defaultTabId="all">
    <template #all>
      <NotificationsBody></NotificationsBody>
    </template>

    <template #unread>
      <NotificationsBody></NotificationsBody>
    </template>

    <template #read>
      <NotificationsBody></NotificationsBody>
    </template>
  </AppTab>
</template>
