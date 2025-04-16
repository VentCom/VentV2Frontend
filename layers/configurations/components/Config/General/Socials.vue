<template>
  <div class="border border-dashboard-card-border">
    <div
      class="p-5 md:p-10 flex flex-col md:flex-row gap-5 items-start justify-between"
    >
      <div class="w-full md:w-1/2">
        <h2 class="text-dashboard-heading font-semibold text-xl pb-2">
          Socials
        </h2>
        <p class="text-xs md:text-base text-dashboard-text">
          Configure Vent’s social media handles
        </p>
      </div>

      <div class="w-full md:w-1/2 flex flex-col gap-3">
        <div class="w-full relative">
          <div
            class="text-dashboard-text absolute left-3 top-1/2 transform -translate-y-1/2 inline-flex items-center gap-2"
          >
            <Icon name="vent:facebook" size="1.4rem" class=""></Icon>

            <span
              class="border-r-2 border-dashboard-card-border inline-block h-[15px]"
            ></span>
          </div>
          <input
            class="border border-dashboard-card-border flex items-center justify-between py-4 px-5 text-dashboard-text pl-13 w-full outline-none hover:border-brand-color-007 focus:border-brand-color-007"
            placeholder="@ventafrica"
          />
        </div>

        <div class="w-full relative">
          <div
            class="text-dashboard-heading absolute left-3 top-1/2 transform -translate-y-1/2 inline-flex items-center gap-2"
          >
            <Icon name="vent:instagram" size="1.4rem" class=""></Icon>

            <span
              class="border-r-2 border-dashboard-card-border inline-block h-[15px]"
            ></span>
          </div>
          <input
            class="border border-dashboard-card-border flex items-center justify-between py-4 px-5 text-dashboard-text pl-13 w-full outline-none hover:border-brand-color-007 focus:border-brand-color-007"
            placeholder="@ventafrica"
          />
        </div>

        <div class="w-full relative">
          <div
            class="text-dashboard-heading absolute left-3 top-1/2 transform -translate-y-1/2 inline-flex items-center gap-2"
          >
            <Icon name="vent:twitter" size="1.4rem" class=""></Icon>

            <span
              class="border-r-2 border-dashboard-card-border inline-block h-[15px]"
            ></span>
          </div>
          <input
            class="border border-dashboard-card-border flex items-center justify-between py-4 px-5 text-dashboard-text pl-13 w-full outline-none hover:border-brand-color-007 focus:border-brand-color-007"
            placeholder="@ventafrica"
          />
        </div>
      </div>
    </div>
    <ul
      class="flex justify-between items-center bg-[#FAFAFA] border-t border-dashboard-card-border"
    >
      <li
        class="p-6 md:p-10 md:py-5.5 block text-[0.81rem] text-dashboard-text"
      >
        These links will appear on the mobile and direct users to Vent’s handles
      </li>

      <li class="p-3">
        <AppButton size="sm" :outlined="true" :block="false">Save</AppButton>
      </li>
    </ul>
  </div>
</template>
