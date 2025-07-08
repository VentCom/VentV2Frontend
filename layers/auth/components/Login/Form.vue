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
      <div>
        <AppInputContainer label="Email">
          <input type="email" placeholder="example@vent.africa" />
        </AppInputContainer>
      </div>
      <!-- Email input end-->

      <div>
        <!-- Password input -->
        <AppInputContainer label="Password" :isPassword="true">
          <template v-slot="props">
            <input
              :type="props.passwordIsVisible ? 'text' : 'password'"
              placeholder="Enter password"
            />
          </template>
        </AppInputContainer>
        <!-- Password input end-->
      </div>

      <!-- login button -->
      <div class="pt-5">
        <AppButton block>Submit</AppButton>
      </div>
      <!-- login button end-->
    </div>
  </div>
</template>
