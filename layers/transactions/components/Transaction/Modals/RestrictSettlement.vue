<script setup lang="ts">
import { AppButton, AppInputContainer } from "#components";
</script>

<template>
  <div class="grid grid-cols-1 gap-10">
    <div>
      <span class="">
        <Icon name="vent:restrict-statement" size="3.5rem"></Icon>
      </span>
    </div>

    <div>
      <h1 class="text-modal-heading font-heading text-3xl md:text-4xl mb-1">
        Restrict Settlement
      </h1>
      <p class="text-sm md:text-base text-modal-subheading">
        Restricting a settlement prevents creating a new one.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-4">
      <AppInputContainer label="Add Restriction">
        <div class="flex items-center justify-between w-full">
          <span class="text-input-placeholder font-semibold"
            >Select restriction</span
          >

          <i>
            <Icon name="vent:arrow-down" size="1.3rem"></Icon>
          </i>
        </div>
      </AppInputContainer>

      <AppInputContainer label="Description">
        <input
          type="text"
          placeholder="Suspicious user's action"
          class="form-input"
        />
      </AppInputContainer>
    </div>

    <div>
      <AppButton block> Save </AppButton>
    </div>
  </div>
</template>
