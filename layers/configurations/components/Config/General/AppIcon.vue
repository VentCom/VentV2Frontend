<template>
  <div class="border border-dashboard-card-border">
    <div class="p-5 md:p-10 flex items-center justify-between">
      <div class="w-full">
        <h2 class="text-dashboard-heading font-semibold text-xl pb-2">
          App Icon
        </h2>
        <p class="text-xs md:text-base text-dashboard-text">
          Set app icon across Vent platforms
        </p>
      </div>

      <AppImageEdit></AppImageEdit>
    </div>
    <ul
      class="flex justify-between items-center bg-[#FAFAFA] border-t border-dashboard-card-border"
    >
      <li
        class="p-6 md:p-10 md:py-5.5 block text-[0.81rem] text-dashboard-text"
      >
        This icon will appear across Vent’s mobile app
      </li>

      <li class="p-3">
        <AppButton size="sm" :outlined="true" :block="false">Save</AppButton>
      </li>
    </ul>
  </div>
</template>
