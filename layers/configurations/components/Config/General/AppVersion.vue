<template>
  <div class="border border-dashboard-card-border">
    <div
      class="p-5 md:p-10 flex flex-col md:flex-row gap-5 items-center justify-between"
    >
      <div class="w-full md:w-1/2">
        <h2 class="text-dashboard-heading font-semibold text-xl pb-2">
          App Versions
        </h2>
        <p class="text-xs md:text-base text-dashboard-text">
          Configure the acceptable app version Vent will operate on.
        </p>
      </div>

      <div class="w-full md:w-1/2 grid grid-cols-1 gap-4">
        <Dropdown :position="'center'" containerFull>
          <template #default>
            <div
              class="w-full border border-dashboard-card-border flex items-center justify-between py-4 px-5 text-dashboard-text"
            >
              Supported app versions

              <Icon
                name="vent:arrow-down"
                size="1.5rem"
                class="text-dashboard-text"
              ></Icon>
            </div>
          </template>
        </Dropdown>

        <div class="flex items-center gap-3">
          <AppCheckbox id="app_version_force_stop"></AppCheckbox>

          <label
            for="app_version_force_stop"
            class="text-[0.813rem] text-dashboard-heading"
            >Force stop unsupported versions</label
          >
        </div>
      </div>
    </div>
    <ul
      class="flex justify-between items-center bg-[#FAFAFA] border-t border-dashboard-card-border"
    >
      <li
        class="p-6 md:p-10 md:py-5.5 block text-[0.81rem] text-dashboard-text"
      >
        This is a text to guide the user on what this setting does.
      </li>

      <li class="p-3 grid grid-cols-2 gap-3 shrink-0">
        <AppButton size="sm" :color="'neutral'" :block="false"
          >Cancel</AppButton
        >
        <AppButton size="sm" :outlined="true" :block="false">Save</AppButton>
      </li>
    </ul>
  </div>
</template>
