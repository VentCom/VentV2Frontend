<script setup lang="ts">
import { AppButton, AppInputContainer } from "#components";

const canViewInput = ref(false);

const showInput = () => {
  canViewInput.value = true;
};

const hideInput = () => {
  canViewInput.value = false;
};
</script>

<template>
  <div class="grid grid-cols-1 gap-10">
    <div>
      <span class="">
        <Icon name="vent:create-statement" size="3.5rem"></Icon>
      </span>
    </div>

    <div>
      <h1 class="text-modal-heading font-heading text-3xl md:text-4xl mb-1">
        Create Settlement
      </h1>
      <p class="text-sm md:text-base text-modal-subheading">
        Verify all details before proceeding with the settlement.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-4">
      <AppInputContainer label="Settlement Amount">
        <div
          class="flex items-center justify-between w-full"
          v-if="canViewInput"
        >
          <input type="text" placeholder="0.00" class="grow" />

          <button
            @click="hideInput"
            class="w-6 h-6 flex justify-center items-center rounded-full border shrink-0 border-dashboard-card-border"
          >
            <icon name="vent:close"></icon>
          </button>
        </div>
        <div
          class="flex justify-between items-center w-full"
          v-if="!canViewInput"
        >
          <span class="text-input-placeholder font-semibold"
            >NGN | 3,000,000.00</span
          >

          <button
            @click="showInput"
            class="text-[0.55rem] px-2 py-1 uppercase tracking-widest border border-brand-color-default text-brand-color-default"
          >
            Edit
          </button>
        </div>
      </AppInputContainer>

      <AppInputContainer label="Description">
        <input
          type="text"
          placeholder="Transaction Remittance"
          class="form-input"
        />
      </AppInputContainer>
    </div>

    <div>
      <AppButton block> Save </AppButton>
    </div>
  </div>
</template>
