<script setup lang="ts">
import { AppAuthLayout, AppPinCode, Icon } from "#components";

const goBack = () => {
  useRouter().push("/set-2fa");
};
</script>

<template>
  <AppAuthLayout @cancel="">
    <!-- body -->
    <div
      class="max-w-[705px] min-h-[80vh] w-full bg-auth-bg relative z-3 p-6 md:p-22 overflow-hidden"
    >
      <!-- logo -->
      <div class="w-[86.9px] mx-auto">
        <img src="/img/verify_2fa.svg" class="w-full" alt="vent logo" />
      </div>
      <!-- logo end-->

      <!-- heading -->
      <div class="text-center mt-6">
        <h1
          class="text-3xl md:text-[2.438rem] font-semibold text-auth-heading text-center mb-2 align-start tracking-tight"
        >
          <span
            >Enter Code From <br />
            Your Authenticator App
          </span>
        </h1>
        <p class="text-sm md:text-base text-auth-subheading text-center">
          Enter the 6-digits code from your authentication app. Codes refresh
          every 30 seconds. Make sure you’re entering the most recent one.
        </p>
      </div>
      <!-- heading end-->

      <div class="mt-10 grid grid-cols-1 gap-4.5">
        <div>
          <!-- Password input -->
          <div>
            <AppPinCode
              :digits="6"
              :inputClass="'w-11 h-11 md:h-16 md:w-16'"
            ></AppPinCode>
          </div>
          <!-- Password input end-->
        </div>

        <!-- login button -->
        <div class="pt-5 w-full flex flex-col gap-6">
          <AppButton block>Submit</AppButton>
          <div
            class="flex items-center gap-2 justify-center text-sm text-dashboard-text"
          >
            Having issues?
            <a
              href="#"
              class="text-dashboard-heading hover:text-brand-color-007"
              >Contact Support</a
            >
          </div>
        </div>
        <!-- login button end-->
      </div>
    </div>
    <!-- body -->
  </AppAuthLayout>
</template>
