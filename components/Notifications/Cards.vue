<script setup lang="ts">
import { AppButton } from "#components";
</script>

<template>
  <ul class="flex items-start gap-4 text-dashboard-heading">
    <li class="w-8 h-8 relative shrink-0">
      <!-- unread signal -->
      <span
        class="block w-3 aspect-square rounded-full bg-red-600 absolute right-0 top-0 border-2 border-dashboard-bg"
      >
      </span>
      <!-- unread signal -->
      <img
        src="/img/user.jpeg"
        class="w-full h-full object-center object-cover rounded-full"
        alt=""
      />
    </li>

    <!-- notification info -->
    <li class="grow grid grid-cols-1 gap-4">
      <div>
        <h3 class="text-sm mb-1">
          <span class="font-bold">Gift Dappa</span> is requesting access to
          remove a transaction from
          <span class="font-bold"> Post No Debit</span>
        </h3>
        <div class="flex items-center gap-2 text-dashboard-text-light text-xs">
          <span>An hour ago</span>
          <span
            class="inline-block w-1 bg-dashboard-text-lighter aspect-square rounded-full"
          >
          </span>
          <span class="capitalize">Updates</span>
        </div>
      </div>

      <!-- extra message -->
      <div>
        <p
          class="border-dashboard-card-border border rounded-xl py-2.5 px-3 text-xs bg-dashboard-bg-dark inline-block w-auto"
        >
          This is a sample text representing the body for this notification.
        </p>
      </div>
      <!-- extra message end -->

      <!-- actions -->
      <ul class="flex items-center gap-4">
        <li>
          <AppButton outlined :size="'sm'">Decline</AppButton>
        </li>
        <li>
          <AppButton :size="'sm'">Accept</AppButton>
        </li>
      </ul>
      <!-- actions end-->
    </li>
    <!-- notification info end -->
  </ul>
</template>
