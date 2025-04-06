<script setup lang="ts">
import { NotificationsCards, TableComponentPagination } from "#components";
</script>

<template>
  <div class="flex w-full flex-col gap-10 min-h-[70vh]">
    <NotificationsCards
      v-for="(count, index) in 2"
      :key="count"
    ></NotificationsCards>

    <div class="mt-auto w-full">
      <TableComponentPagination></TableComponentPagination>
    </div>
  </div>
</template>
