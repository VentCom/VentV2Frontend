<script setup lang="ts">
import { AppButton, Icon } from "#components";
</script>

<template>
  <div>
    <h3
      class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-3"
    >
      more actions:
    </h3>

    <div class="flex gap-2 overflow-x-auto">
      <AppButton outlined>
        <span class="whitespace-nowrap">Explore on Blockchain</span>
        <i class="block pt-2">
          <Icon name="vent:link" size="1.3rem"></Icon>
        </i>
      </AppButton>
      <AppButton outlined>
        <span class="whitespace-nowrap">Scan Address</span>
        <i class="block pt-2">
          <Icon name="vent:link" size="1.3rem"></Icon>
        </i>
      </AppButton>
      <AppButton outlined>
        <span class="whitespace-nowrap">Request Account Change</span>
      </AppButton>
    </div>
  </div>
</template>
