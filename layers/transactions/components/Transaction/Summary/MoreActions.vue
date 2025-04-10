<script setup lang="ts">
import { AppButton, Icon } from "#components";

const restrictSettlement = ref({
  showDialogBox: () => {},
  hideDialogBox: () => {},
});

const accountChange = ref({
  showDialogBox: () => {},
  hideDialogBox: () => {},
});

const logActivities = ref({
  showDialogBox: () => {},
  hideDialogBox: () => {},
});

const comments = ref({
  showDialogBox: () => {},
  hideDialogBox: () => {},
});
</script>

<template>
  <Teleport to="body">
    <AppModal ref="restrictSettlement">
      <TransactionModalsRestrictSettlement></TransactionModalsRestrictSettlement>
    </AppModal>
  </Teleport>

  <Teleport to="body">
    <AppModal ref="accountChange">
      <TransactionModalsRequestAccChange></TransactionModalsRequestAccChange>
    </AppModal>
  </Teleport>

  <Teleport to="body">
    <AppSideModal ref="logActivities">
      <TransactionModalsLogActivities></TransactionModalsLogActivities>
    </AppSideModal>
  </Teleport>

  <Teleport to="body">
    <AppSideModal ref="comments">
      <TransactionModalsCommentList></TransactionModalsCommentList>
    </AppSideModal>
  </Teleport>
  <div class="w-full grid grid-cols-1 gap-2 md:gap-6">
    <h3
      class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading md:hidden mb-1"
    >
      more actions:
    </h3>

    <ul class="grid grid-cols-2 md:grid-cols-1 gap-2 w-full">
      <li>
        <AppButton @click="restrictSettlement.showDialogBox" block outlined>
          <span class="whitespace-nowrap">Restrict Settlement</span>
        </AppButton>
      </li>
      <li>
        <AppButton @click="accountChange.showDialogBox" block outlined>
          <span class="whitespace-nowrap">Amount Change</span>
        </AppButton>
      </li>
    </ul>

    <ul class="grid grid-cols-2 md:grid-cols-1 gap-2 w-full">
      <li>
        <AppButton @click="comments.showDialogBox" block outlined>
          <span class="whitespace-nowrap">Comments</span>
        </AppButton>
      </li>
      <li>
        <AppButton @click="logActivities.showDialogBox" block outlined>
          <span class="whitespace-nowrap">Log Activities</span>
        </AppButton>
      </li>
      <li class="col-span-2 md:col-span-1">
        <AppButton block outlined>
          <span class="whitespace-nowrap">Explore</span>
          <i class="block w-5 h-5 overflow-hidden">
            <Icon name="vent:link" size="1.3rem"></Icon>
          </i>
        </AppButton>
      </li>
    </ul>
  </div>
</template>
