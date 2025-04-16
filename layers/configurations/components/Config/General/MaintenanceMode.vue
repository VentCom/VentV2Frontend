<template>
  <div class="border border-dashboard-card-border">
    <div
      class="p-5 md:p-10 flex flex-col md:flex-row gap-5 items-center justify-between"
    >
      <div class="w-full md:w-1/2">
        <h2 class="text-dashboard-heading font-semibold text-xl pb-2">
          Maintenance Mode
        </h2>
        <p class="text-xs md:text-base text-dashboard-text">
          Set mobile application on maintenance mode.
        </p>
      </div>

      <div class="w-full md:w-1/2 flex gap-3">
        <label
          role="checkbox"
          class="block w-[33px] p-1.5 rounded-full overflow-hidden cursor-pointer relative"
        >
          <input
            type="checkbox"
            name=""
            id="maintenance_mode"
            class="sr-only peer"
          />
          <span
            class="block absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out bg-dashboard-header-border peer-checked:bg-brand-color-default"
          >
          </span>
          <span
            class="rounded-full relative z-1 bg-white w-[14px] aspect-square block transition-all duration-300 ease-in-out peer-checked:translate-x-[0] translate-x-[50%]"
          >
          </span>
        </label>
        <label class="text-dashboard-heading text-base" for="maintenance_mode"
          >Enable maintenance mode</label
        >
      </div>
    </div>
    <ul
      class="flex justify-between items-center bg-[#FAFAFA] border-t border-dashboard-card-border"
    >
      <li
        class="p-6 md:p-10 md:py-5.5 block text-[0.81rem] text-dashboard-text"
      >
        Users access to application’s functionalities will be restricted during
        this time.
      </li>
    </ul>
  </div>
</template>
