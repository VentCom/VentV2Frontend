<script lang="ts" setup>
definePageMeta({
  layout: "auth",
});
</script>
<template>
  <div
    class="max-w-[705px] min-h-[90vh] w-full bg-auth-bg relative z-3 p-6 md:p-22 overflow-hidden"
  >
    <!-- logo -->
    <div class="w-[86.9px] mx-auto">
      <img src="/img/logo.svg" class="w-full" alt="vent logo" />
    </div>
    <!-- logo end-->

    <!-- heading -->
    <div class="text-center mt-6">
      <h1
        class="text-3xl md:text-[3.375rem] font-heading text-auth-heading text-center mb-2"
      >
        Welcome Back
      </h1>
      <p class="text-sm md:text-base text-auth-subheading text-center">
        Sign in to manage transactions, track insights, and streamline
        operations.
      </p>
    </div>
    <!-- heading end-->

    <div class="mt-10 grid grid-cols-1 gap-4.5">
      <!-- Email input -->
      <div class="relative p-4 group">
        <label
          class="text-xs text-auth-input-label mb-1 relative z-2"
          for="email"
          >Email</label
        >
        <input
          type="email"
          id="email"
          class="inline-block w-full py-1 px-0 outline-0 bg-transparent placeholder:text-auth-input-placeholder peer relative z-2"
          placeholder="example@vent.africa"
        />
        <div
          class="absolute inset-0 w-full h-full border border-auth-input-border z-1 peer-hover:border-brand-color-default peer-focus:border-brand-color-default group-hover:border-brand-color-default"
        ></div>
      </div>
      <!-- Email input end-->

      <div>
        <!-- Password input -->
        <div class="relative p-4 pr-17 group">
          <label
            class="text-xs text-auth-input-label mb-1 relative z-2"
            for="password"
            >Password</label
          >
          <button
            class="text-[0.55rem] px-2 py-1 bg-auth-pass-hide-btn text-auth-pass-hide-btn-text absolute bottom-5 cursor-pointer right-4 z-2 uppercase tracking-widest"
          >
            Hide
          </button>
          <input
            type="password"
            id="password"
            class="inline-block w-full py-1 px-0 outline-0 bg-transparent placeholder:text-auth-input-placeholder peer relative z-2"
            placeholder="Enter password"
          />
          <div
            class="absolute inset-0 w-full h-full border border-auth-input-border z-1 peer-hover:border-brand-color-default peer-focus:border-brand-color-default group-hover:border-brand-color-default"
          ></div>
        </div>
        <!-- Password input end-->

        <!-- Forgot password link -->
        <div
          class="flex items-center justify-between p-2.5 w-full bg-auth-forgot-pass-container mt-3"
        >
          <div class="text-auth-forgot-pass-text flex items-center gap-2">
            <i class="mt-2">
              <icon name="vent:shield-security" size="1.4rem"></icon>
            </i>
            <p class="text-xs">Forgot Password?</p>
          </div>

          <button
            class="text-[0.55rem] px-2 py-1 bg-auth-forgot-pass-btn text-auth-pass-hide-btn-text cursor-pointer uppercase tracking-widest"
          >
            Reset Password
          </button>
        </div>
        <!-- Forgot password link end-->
      </div>

      <!-- login button -->
      <div class="pt-5">
        <button
          class="bg-brand-color-default hover:bg-brand-color-005 cursor-pointer text-white p-5 text-center w-full transition-colors duration-500 ease-in-out"
        >
          Login
        </button>
      </div>
      <!-- login button end-->
    </div>
  </div>
</template>
