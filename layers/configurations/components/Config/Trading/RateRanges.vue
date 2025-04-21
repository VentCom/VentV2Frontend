<script setup lang="ts">
import { AppButton, ConfigTradingRateRangeCard } from "#components";
import Dropdown from "~/components/App/Dropdown.vue";

const newCurrencyField = ref(false);

const showNewCurrencyField = () => {
  newCurrencyField.value = true;
};

const hideNewCurrencyField = () => {
  newCurrencyField.value = false;
};
</script>

<template>
  <div class="border border-dashboard-card-border">
    <div class="p-5 md:p-10 grid grid-cols-1 gap-11">
      <div class="w-full">
        <h2 class="text-dashboard-heading font-semibold text-xl pb-2">
          Rates Ranges
        </h2>
        <p class="text-xs md:text-base text-dashboard-text">
          Configure your trading rate ranges
        </p>
      </div>

      <div class="w-full grid grid-cols-1 gap-4 overflow-hidden">
        <ConfigTradingRateRangeCard
          v-for="(rate, index) in 5"
          :key="index"
        ></ConfigTradingRateRangeCard>

        <Transition name="slideInRight">
          <div
            v-if="newCurrencyField"
            class="border border-dashboard-card-border p-2 w-full bg-dashboard-bg-darker rounded-2xl flex gap-2"
          >
            <input
              type="text"
              class="outline-none py-2 grow pl-2"
              placeholder="Untitled Currency"
            />
            <ul class="flex items-center shrink-0 gap-2">
              <li>
                <AppButton
                  @click="hideNewCurrencyField"
                  :color="'neutral'"
                  outlined
                  rounded
                  size="sm"
                  >Cancel</AppButton
                >
              </li>
              <li>
                <AppButton outlined rounded size="sm">Save</AppButton>
              </li>
            </ul>
          </div>
        </Transition>

        <div>
          <button
            @click="showNewCurrencyField"
            class="flex items-center gap-2 text-brand-color-default border hover:text-brand-color-006 hover:border-brand-color-006 cursor-pointer border-brand-color-default rounded-full bg-dashboard-bg text-[0.81rem] py-2 px-3.5"
          >
            <icon name="vent:add" size="1.1rem"></icon>
            Add Currency
          </button>
        </div>
      </div>
    </div>
    <ul
      class="flex justify-between items-center bg-[#FAFAFA] border-t border-dashboard-card-border"
    >
      <li
        class="p-6 md:p-10 md:py-5.5 block text-[0.81rem] text-dashboard-text"
      >
        These rate ranges will appear on the mobile app
      </li>

      <li class="p-3 shrink-0">
        <AppButton size="sm" :outlined="true" :block="false">Save</AppButton>
      </li>
    </ul>
  </div>
</template>
