<template>
  <div class="border border-dashboard-card-border">
    <div
      class="p-5 md:p-10 flex flex-col md:flex-row gap-5 items-start justify-between"
    >
      <div class="w-full md:w-1/2">
        <h2 class="text-dashboard-heading font-semibold text-xl pb-2">
          Messaging Channels
        </h2>
        <p class="text-xs md:text-base text-dashboard-text">
          Set the available channels to fire an OTP
        </p>
      </div>

      <div class="w-full md:w-1/2">
        <ul class="grid grid-cols-1 w-full gap-5">
          <li class="flex gap-3">
            <AppSwitch id="otp_email"></AppSwitch>
            <label class="text-dashboard-heading text-base" for="otp_email"
              >Email</label
            >
          </li>

          <li class="flex gap-3">
            <AppSwitch id="otp_whatsapp"></AppSwitch>
            <label class="text-dashboard-heading text-base" for="otp_whatsapp"
              >Whatsapp</label
            >
          </li>

          <li class="flex gap-3">
            <AppSwitch id="otp_sms"></AppSwitch>
            <label class="text-dashboard-heading text-base" for="otp_sms"
              >Short Messaging Service (SMS)</label
            >
          </li>

          <li class="flex gap-3">
            <AppSwitch id="otp_phone_call"></AppSwitch>
            <label class="text-dashboard-heading text-base" for="otp_phone_call"
              >Phone Call (after messaging fails)</label
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
        These are the channels One-Time Passwords will be fired.
      </li>
    </ul>
  </div>
</template>
