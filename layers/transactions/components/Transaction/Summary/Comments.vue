<script setup lang="ts">
import { AppButton, TransactionCommentsCard } from "#components";
</script>

<template>
  <div
    class="border border-dashboard-card-border p-6 w-full flex flex-col gap-4"
  >
    <!-- heading -->
    <h3 class="font-semibold text-dashboard-heading text-xl mb-1">Comments</h3>
    <!-- heading end-->

    <!-- Chat content -->
    <div class="border border-dashboard-card-border p-6 md:p-8">
      <TransactionCommentsCard></TransactionCommentsCard>
    </div>
    <!-- Chat content end-->

    <!-- Chat input -->
    <div class="p-6 relative group">
      <textarea
        name=""
        class="w-full border-0 outline-0 relative z-2 peer text-dashboard-text placeholder:text-dashboard-text-light"
        rows="3"
        placeholder="Type something.."
        id=""
      ></textarea>

      <div
        class="absolute top-0 left-0 w-full h-full border border-dashboard-card-border group-hover:border-brand-color-default peer-focus:border-brand-color-default"
      ></div>

      <div class="flex items-end justify-between">
        <ul class="flex items-center shrink-0 gap-3">
          <li>
            <button
              class="cursor-pointer text-dashboard-text hover:text-brand-color-default"
            >
              <Icon name="vent:smiley" size="1.5rem"></Icon>
            </button>
          </li>
          <li>
            <button
              class="cursor-pointer text-dashboard-text hover:text-brand-color-default"
            >
              <Icon name="vent:image" size="1.5rem"></Icon>
            </button>
          </li>
          <li>
            <button
              class="cursor-pointer text-dashboard-text hover:text-brand-color-default"
            >
              <Icon name="vent:microphone" size="1.5rem"></Icon>
            </button>
          </li>
        </ul>

        <AppButton>
          <Icon name="vent:send" size="1.8rem"></Icon>
        </AppButton>
      </div>
    </div>
    <!-- Chat input end-->
  </div>
</template>
