<script setup lang="ts">
const { singleCustomerView } = useCustomerConfig();

const isOpen = ref(false);

const toggleCollapsable = () => {
  isOpen.value = !isOpen.value;
};
</script>
<template>
  <div
    class="bg-dashboard-bg-darker rounded-xl border border-dashboard-card-border p-2"
  >
    <div
      class="grid grid-cols-1 gap-3 md:gap-6 border-dashboard-card-border border bg-white rounded-[6px] p-4"
    >
      <div class="grid grid-cols-1 gap-3 md:gap-6">
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
      <div class="grid grid-cols-1 gap-6">
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

        <!-- last login -->
        <div class="flex items-center gap-2">
          <span
            class="flex items-center justify-center w-[30px] h-[30px] rounded-[6px] border border-dashboard-card-border bg-dashboard-bg-dark shrink-0"
          >
            <Icon name="vent:calendar" size="1rem"></Icon>
          </span>
          <div>
            <p class="text-[9px] text-dashboard-text tracking-[2px] uppercase">
              Last login
            </p>
            <h4 class="text-sm md:text-base text-dashboard-heading mt-1">
              Monday 21st July, 2025 8:32 AM
            </h4>
          </div>
        </div>
        <!-- last login end-->
      </div>
      <!-- collapsable end-->
    </div>
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
