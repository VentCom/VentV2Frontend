<script setup lang="ts">
import { AppAuthLayout, AppPinCode, Icon } from "#components";

const { setRouteActivity } = useOnboardingStore();

const { verify2FA, verifying_2fa } = use2FAStore();

const goBack = () => {
  setRouteActivity(OnboardingRouteNames.CREATE_2FA, true);
};

const digits = 6;

const pinCode = ref("");

const pinLengthIsValid = computed(() => {
  return pinCode.value.length === digits;
});

const completeOnboarding = () => {
  verify2FA(pinCode.value).then((res) => {
    if (res?.status === true) {
      useToastHandler().triggerToast(res.message, "success", "2FA verified");
      return setTimeout(() => {
        window.location.href = "/";
      }, 700);
    }
    useToastHandler().triggerToast(
      res?.message,
      "error",
      "2FA Verification Failed"
    );
  });
};
</script>

<template>
  <AppAuthLayout @cancel="goBack">
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
              :digits="digits"
              :inputClass="'w-11 h-11 md:h-16 md:w-16'"
              v-model="pinCode"
            ></AppPinCode>
          </div>
          <!-- Password input end-->
        </div>

        <!-- login button -->
        <div class="pt-5 w-full flex flex-col gap-6">
          <AppButton
            :disabled="!pinLengthIsValid"
            :loading="verifying_2fa"
            @click="completeOnboarding"
            block
            >Submit</AppButton
          >
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
