<script setup lang="ts">
const { singleCustomerView } = useCustomerConfig();

const isOpen = ref(false);

const toggleCollapsable = () => {
  isOpen.value = !isOpen.value;
};
</script>
<template>
  <div
    :class="{
      'bg-dashboard-bg-darker rounded-xl border border-dashboard-card-border p-2':
        singleCustomerView === CustomerView.FULL,
    }"
  >
    <div
      :class="{
        'grid grid-cols-1 gap-3 md:gap-6 border-dashboard-card-border border bg-white rounded-[6px] p-4':
          singleCustomerView === CustomerView.FULL,
        collapsable: singleCustomerView === CustomerView.MINIMAL,
        show: isOpen,
      }"
    >
      <div
        :class="{
          'grid grid-cols-1 gap-3 md:gap-6':
            singleCustomerView === CustomerView.FULL,
          'grid grid-cols-2 gap-3 md:gap-6':
            singleCustomerView === CustomerView.MINIMAL,
        }"
      >
        <!-- email -->
        <div class="flex items-center gap-2">
          <span
            class="flex items-center justify-center w-[30px] h-[30px] rounded-[6px] border border-dashboard-card-border bg-dashboard-bg-dark shrink-0"
          >
            <Icon name="vent:sms" size="1rem"></Icon>
          </span>
          <div>
            <p class="text-[9px] text-dashboard-text tracking-[2px] uppercase">
              Email Address
            </p>
            <h4 class="text-sm md:text-base text-dashboard-heading mt-1">
              exa***le@email.com
            </h4>
          </div>
        </div>
        <!-- email end-->

        <!-- phone number -->
        <div class="flex items-center gap-2">
          <span
            class="flex items-center justify-center w-[30px] h-[30px] rounded-[6px] border border-dashboard-card-border bg-dashboard-bg-dark shrink-0"
          >
            <Icon name="vent:sms" size="1rem"></Icon>
          </span>
          <div>
            <p class="text-[9px] text-dashboard-text tracking-[2px] uppercase">
              Phone Number
            </p>
            <AppClipBoard text="+23470***567">
              <span class="text-dashboard-text"> +23470***567 </span>
            </AppClipBoard>
          </div>
        </div>
        <!-- phone number end-->

        <!-- Nationality -->
        <div class="flex items-center gap-2">
          <span
            class="flex items-center justify-center w-[30px] h-[30px] rounded-[6px] border border-dashboard-card-border bg-dashboard-bg-dark shrink-0"
          >
            <Icon name="vent:global" size="1rem"></Icon>
          </span>
          <div>
            <p class="text-[9px] text-dashboard-text tracking-[2px] uppercase">
              Nationality
            </p>
            <div class="flex items gap-2 mt-1">
              <h4 class="text-sm md:text-base text-dashboard-heading">
                Nigeria
              </h4>
              <img src="/img/ng-flag.svg" class="w-[10px] md:w-[14px]" alt="" />
            </div>
          </div>
        </div>
        <!-- Nationality end -->

        <!-- Gender -->
        <div class="flex items-center gap-2">
          <span
            class="flex items-center justify-center w-[30px] h-[30px] rounded-[6px] border border-dashboard-card-border bg-dashboard-bg-dark shrink-0"
          >
            <Icon name="vent:happyemoji" size="1rem"></Icon>
          </span>
          <div>
            <p class="text-[9px] text-dashboard-text tracking-[2px] uppercase">
              Gender
            </p>
            <h4 class="text-sm md:text-base text-dashboard-heading mt-1">
              Male
            </h4>
          </div>
        </div>
        <!-- Gender end-->
      </div>

      <!-- collapsable -->
      <div class="grid grid-cols-1 gap-6 collapsable-content">
        <!-- Residential Address -->
        <div class="flex items-center gap-2">
          <span
            class="flex items-center justify-center w-[30px] h-[30px] rounded-[6px] border border-dashboard-card-border bg-dashboard-bg-dark shrink-0"
          >
            <Icon name="vent:gps" size="1rem"></Icon>
          </span>
          <div>
            <p class="text-[9px] text-dashboard-text tracking-[2px] uppercase">
              Residential Address
            </p>
            <h4 class="text-sm md:text-base text-dashboard-heading mt-1">
              No 7, Jalingo Avenue, Off Airport Road, Warri, Delta State
            </h4>
          </div>
        </div>
        <!-- Residential Address end-->

        <!-- joined -->
        <div class="flex items-center gap-2">
          <span
            class="flex items-center justify-center w-[30px] h-[30px] rounded-[6px] border border-dashboard-card-border bg-dashboard-bg-dark shrink-0"
          >
            <Icon name="vent:calendar" size="1rem"></Icon>
          </span>
          <div>
            <p class="text-[9px] text-dashboard-text tracking-[2px] uppercase">
              Joined Since
            </p>
            <h4 class="text-sm md:text-base text-dashboard-heading mt-1">
              Wednesday 9th July, 2025 8:32 AM
            </h4>
          </div>
        </div>
        <!-- joined end-->
      </div>
      <!-- collapsable end-->
    </div>

    <!-- collapse button -->
    <div
      v-if="singleCustomerView === CustomerView.MINIMAL"
      class="flex justify-between items-center mt-4.5 w-full gap-2"
    >
      <div
        class="w-[25px] h-[25px] shrink-0 border border-dashboard-card-border rounded-[4px] p-1"
      >
        <span
          class="block w-full h-full bg-dashboard-card-border rounded-[2px]"
        ></span>
      </div>
      <div class="border-t border-dashboard-card-border w-full"></div>
      <button
        @click="toggleCollapsable"
        class="border border-dashboard-card-border rounded-[8px] px-3 py-2.5 text-[13px] text-dashboard-text shrink-0 hover:border-brand-color-default hover:shadow-md hover:shadow-brand-color-010 cursor-pointer"
      >
        {{ isOpen ? "See less" : "See more" }}
      </button>
    </div>
    <!-- collapse button end-->
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.collapsable {
  display: grid;
  grid-template-rows: auto 0fr;
  grid-template-columns: 1fr;
  transition: grid-template-rows 0.3s ease;
  overflow: hidden;
}

.collapsable.show {
  grid-template-rows: auto 1fr !important;
  @apply gap-3 md:gap-6;
}

.collapsable-content {
  overflow: hidden;
}
</style>
