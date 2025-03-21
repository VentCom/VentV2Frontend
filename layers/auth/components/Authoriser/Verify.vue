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
          <span>Welcome Back, </span>
          <img
            src="/img/user.jpg"
            class="inline-block w-10 aspect-square rounded-2xl border-2 border-brand-color-012 object-cover object-center"
            alt=""
          />

          <span> Imani</span>
        </h1>
        <p class="text-sm md:text-base text-auth-subheading text-center">
          Enter the 6-digits code from your authentication app to continue.
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
        <div class="pt-5">
          <button
            class="bg-brand-color-default hover:bg-brand-color-005 cursor-pointer text-white p-5 text-center w-full transition-colors duration-500 ease-in-out"
          >
            Submit
          </button>
        </div>
        <!-- login button end-->
      </div>
    </div>
    <!-- body -->
  </AppAuthLayout>
</template>
