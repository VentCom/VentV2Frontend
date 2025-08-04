<template>
  <div
    class="md:col-span-2 border border-dashboard-card-border rounded-xl p-6 grid grid-cols-1 gap-8"
  >
    <!-- Heading -->
    <div
      class="border-b border-dashboard-card-divider pb-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between"
    >
      <div class="flex items-center gap-3 md:gap-5">
        <img src="/img/usdt_icon.svg" class="w-6 md:w-[68px]" alt="" />
        <div>
          <h6
            class="text-base md:text-[25px] text-dashboard-heading mb-1 font-semibold"
          >
            TYiN***jmkb
          </h6>
          <p class="text-[10px] md:text-[18px] uppercase text-dashboard-text">
            USDT (TRC20)
          </p>
        </div>
      </div>

      <div class="flex items-center gap-3 md:gap-5 shrink-0">
        <span class="text-sm">
          <AppPills color="green">Active</AppPills>
        </span>

        <button
          class="text-dashboard-text flex items-center hover:text-brand-color-default"
        >
          <Icon name="vent:empty-more" size="1.5rem"></Icon>
        </button>
      </div>
    </div>
    <!-- Heading end -->

    <div class="flex flex-col md:flex-row w-full gap-6 justify-between">
      <!-- Profile data -->
      <ul class="flex items-center gap-2">
        <li class="shrink-0">
          <img
            src="/img/user.jpeg"
            class="w-[40px] aspect-square rounded-full object-center object-cover"
            alt="User image"
          />
        </li>
        <li>
          <p>Peremobowei Agiddi</p>
          <span class="text-dashboard-text text-[0.6rem]"
            >exa***ple@email.com</span
          >
        </li>
      </ul>
      <!-- Profile data -->

      <!-- divider -->
      <div class="hidden md:block divider-vertical"></div>
      <div class="divider-horizontal md:hidden"></div>
      <!-- divider end-->

      <!-- Wallet address -->
      <div class="flex items-center gap-2">
        <span
          class="flex items-center justify-center w-[40px] h-[40px] rounded-[6px] border border-dashboard-card-border bg-dashboard-bg-dark shrink-0"
        >
          <Icon name="vent:hashtag-2" size="1rem"></Icon>
        </span>
        <div>
          <p class="text-[9px] text-dashboard-text tracking-[2px] uppercase">
            Wallet Address
          </p>
          <AppClipBoard text="+23470***567">
            <span class="text-dashboard-heading"> TYiN***jmkb </span>
          </AppClipBoard>
        </div>
      </div>
      <!-- Wallet address end-->

      <!-- divider -->
      <div class="hidden md:block divider-vertical"></div>
      <div class="divider-horizontal md:hidden"></div>
      <!-- divider end-->

      <!-- Network -->
      <div class="flex items-center gap-2">
        <span
          class="flex items-center justify-center w-[40px] h-[40px] rounded-[6px] border border-dashboard-card-border bg-dashboard-bg-dark shrink-0"
        >
          <Icon name="vent:hashtag-2" size="1rem"></Icon>
        </span>
        <div>
          <p class="text-[9px] text-dashboard-text tracking-[2px] uppercase">
            Network
          </p>
          <span class="text-dashboard-heading"> TRC20</span>
        </div>
      </div>
      <!-- Network end-->

      <!-- divider -->
      <div class="hidden md:block divider-vertical"></div>
      <div class="divider-horizontal md:hidden"></div>
      <!-- divider end-->

      <!-- Network -->
      <div class="flex items-center gap-2">
        <span
          class="flex items-center justify-center w-[40px] h-[40px] rounded-[6px] border border-dashboard-card-border bg-dashboard-bg-dark shrink-0"
        >
          <Icon name="vent:happyemoji" size="1rem"></Icon>
        </span>
        <div>
          <p class="text-[9px] text-dashboard-text tracking-[2px] uppercase">
            Provider
          </p>
          <span class="text-dashboard-heading"> Westgate</span>
        </div>
      </div>
      <!-- Network end-->

      <!-- divider -->
      <div class="hidden md:block divider-vertical"></div>
      <div class="divider-horizontal md:hidden"></div>
      <!-- divider end-->

      <!-- Network -->
      <div class="flex items-center gap-2">
        <span
          class="flex items-center justify-center w-[40px] h-[40px] rounded-[6px] border border-dashboard-card-border bg-dashboard-bg-dark shrink-0"
        >
          <Icon name="vent:calendar" size="1rem"></Icon>
        </span>
        <div>
          <p class="text-[9px] text-dashboard-text tracking-[2px] uppercase">
            Date Generated
          </p>
          <span class="text-dashboard-heading"> July 9th, 2025 8:32 AM</span>
        </div>
      </div>
      <!-- Network end-->
    </div>
  </div>
</template>
<style scoped>
@reference "~/assets/css/main.css";

.divider-horizontal {
  @apply border-dashboard-card-border border-l w-full h-0.5;
}
.divider-vertical {
  @apply border-dashboard-card-border border-l h-auto w-1.5;
}
</style>
