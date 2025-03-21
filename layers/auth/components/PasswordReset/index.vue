<template>
  <AppAuthLayout>
    <div
      class="max-w-[705px] min-h-[90vh] w-full bg-auth-bg relative z-3 p-6 md:p-22 overflow-hidden"
    >
      <!-- logo -->
      <div class="w-[86.9px] mx-auto">
        <img
          src="/img/reset_password.png"
          class="w-full"
          alt="password reset image"
        />
      </div>
      <!-- logo end-->

      <!-- heading -->
      <div class="text-center mt-6">
        <h1
          class="text-3xl md:text-[2.438rem] tracking-tight font-semibold text-auth-heading text-center mb-2"
        >
          Set New Password
        </h1>
        <p
          class="text-sm md:text-base text-auth-subheading text-center w-[90%] mx-auto"
        >
          Create a strong, secure password. Confirm your new password and save
          the changes. You will be redirected to login.
        </p>
      </div>
      <!-- heading end-->

      <div class="mt-10 grid grid-cols-1 gap-4.5">
        <div>
          <!-- Password input -->
          <AppInputContainer label="New Password" :isPassword="true">
            <template v-slot="props">
              <input
                :type="props.passwordIsVisible ? 'text' : 'password'"
                placeholder="Enter password"
              />
            </template>
          </AppInputContainer>
          <!-- Password input end-->
        </div>

        <div>
          <!-- Password input -->
          <AppInputContainer label="Confirm Password" :isPassword="true">
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
          <button
            class="bg-brand-color-default hover:bg-brand-color-005 cursor-pointer text-white p-5 text-center w-full transition-colors duration-500 ease-in-out"
          >
            Save Changes
          </button>
        </div>
        <!-- login button end-->
      </div>
    </div>
  </AppAuthLayout>
</template>
