<script setup lang="ts">
import { AppButton, AppInputContainer } from "#components";
</script>

<template>
  <div class="grid grid-cols-1 gap-10">
    <div>
      <span class="">
        <Icon name="vent:request-account-change" size="3.5rem"></Icon>
      </span>
    </div>

    <div>
      <h1 class="text-modal-heading font-heading text-3xl md:text-4xl mb-1">
        Request Account Change
      </h1>
      <p class="text-sm md:text-base text-modal-subheading">
        Prompt a user to update his settlement account
      </p>
    </div>

    <div class="grid grid-cols-1 gap-4">
      <AppInputContainer label="Message">
        <input type="text" placeholder="Add a message" class="form-input" />
      </AppInputContainer>
    </div>

    <div>
      <AppButton block> Submit </AppButton>
    </div>
  </div>
</template>
