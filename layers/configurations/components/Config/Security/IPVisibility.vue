<template>
  <div class="border border-dashboard-card-border">
    <div
      class="p-5 md:p-10 flex flex-col md:flex-row gap-5 items-start justify-between"
    >
      <div class="w-full md:w-[358px]">
        <h2 class="text-dashboard-heading font-semibold text-xl pb-2">
          IP Address Visibility
        </h2>
        <p class="text-xs md:text-base text-dashboard-text">
          IP addresses may be personal data. Choose to show or hide them in the
          Vent Dashboard and logs.
        </p>
      </div>

      <div class="w-full md:w-1/2 grid grid-cols-1 gap-4">
        <ul class="grid grid-cols-1 w-full gap-7">
          <li class="flex gap-3">
            <div class="inline-block shrink-0">
              <AppSwitch id="pg_glyde"></AppSwitch>
            </div>
            <label class="text-dashboard-heading text-base block" for="pg_glyde"
              ><p class="text-dashboard-heading text-base">Vent Dashboard</p>
              <span class="text-dashboard-text text-sm"
                >Show or hide users’ IP address on Vent’s dashboard
              </span></label
            >
          </li>

          <li class="flex gap-3">
            <div class="inline-block shrink-0">
              <AppSwitch id="log_drains"></AppSwitch>
            </div>
            <label
              class="text-dashboard-heading text-base block"
              for="log_drains"
              ><p class="text-dashboard-heading text-base">Log Drains</p>
              <span class="text-dashboard-text text-sm"
                >Show or hide users’ IP address in Vent’s log drains
              </span></label
            >
          </li>
        </ul>
      </div>
    </div>

    <ul
      class="flex justify-between items-center bg-[#FAFAFA] border-t border-dashboard-card-border"
    >
      <li
        class="p-6 md:p-10 md:py-5.5 block text-[0.81rem] text-dashboard-text"
      >
        For more information, visit our
        <a href="#" class="inline-flex gap-1 text-[#6666FF] items-end">
          <span class="inline-block">Privacy Policy</span>
          <span class="inline-block"
            ><Icon name="vent:external-link" size="1rem"></Icon></span
        ></a>
      </li>

      <li class="p-3 grid grid-cols-2 gap-3 shrink-0">
        <AppButton size="sm" rounded :color="'neutral'" :block="false"
          >Cancel</AppButton
        >
        <AppButton size="sm" rounded :outlined="true" :block="false"
          >Save</AppButton
        >
      </li>
    </ul>
  </div>
</template>
