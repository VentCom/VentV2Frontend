<script lang="ts" setup>
import useVuelidate from "@vuelidate/core";
import {
  helpers,
  maxLength,
  minLength,
  required,
  sameAs,
} from "@vuelidate/validators";

const payload = reactive({
  password: "",
  password_confirmation: "",
});

const validations = computed(() => {
  return {
    password: {
      required: helpers.withMessage("Password is required", required),
      min: helpers.withMessage(
        "Password must be at least 8 characters",
        minLength(8)
      ),
    },
    password_confirmation: {
      required: helpers.withMessage(
        "Password confirmation is required",
        required
      ),
      sameAsPassword: helpers.withMessage(
        "Passwords must match",
        sameAs(payload.password)
      ),
    },
  };
});

const v$ = useVuelidate(validations, payload);

const { acceptInvitation, accepting_invitation } = useInvitationStore();

const { setRouteActivity } = useOnboardingStore();

const goTo2FaCreate = () => {
  v$.value.$touch();
  !v$.value.$error &&
    acceptInvitation(payload).then((res) => {
      if (res?.status === true) {
        return setRouteActivity(OnboardingRouteNames.CREATE_2FA, true);
      }
      useToastHandler().triggerToast(
        res?.message,
        "error",
        "Password creation failed"
      );
    });
};
</script>
<template>
  <div
    class="max-w-[705px] min-h-svh w-full flex flex-col items-center justify-center bg-auth-bg relative z-3 p-6 md:p-22 overflow-hidden mx-auto"
  >
    <!-- logo -->
    <div class="w-[86.9px] mx-auto">
      <img src="/img/logo.svg" class="w-full" alt="vent logo" />
    </div>
    <!-- logo end-->

    <!-- heading -->
    <div class="text-center mt-6 w-full">
      <h1
        class="text-3xl md:text-[3.375rem] font-heading text-auth-heading text-center mb-2"
      >
        Welcome Back
      </h1>
      <p class="text-sm md:text-base text-auth-subheading text-center">
        You're almost in! Create a password to complete your account setup.
      </p>
    </div>
    <!-- heading end-->

    <div class="mt-10 grid grid-cols-1 gap-4.5 w-full">
      <div>
        <!-- Password input -->
        <AppInputContainer
          :error="v$.password.$errors[0]?.$message?.toString()"
          label="Password"
          :isPassword="true"
        >
          <template v-slot="props">
            <input
              :type="props.passwordIsVisible ? 'text' : 'password'"
              @input="v$.password.$touch"
              placeholder="Enter password"
              v-model="payload.password"
            />
          </template>
        </AppInputContainer>
        <!-- Password input end-->
      </div>

      <div>
        <!-- Password input -->
        <AppInputContainer
          :error="v$.password_confirmation.$errors[0]?.$message?.toString()"
          label="Confirm Password"
          :isPassword="true"
        >
          <template v-slot="props">
            <input
              :type="props.passwordIsVisible ? 'text' : 'password'"
              placeholder="Enter password"
              @input="v$.password.$touch"
              v-model="payload.password_confirmation"
            />
          </template>
        </AppInputContainer>
        <!-- Password input end-->
      </div>

      <!-- login button -->
      <div class="pt-5 w-full flex flex-col gap-6">
        <AppButton @click="goTo2FaCreate" :loading="accepting_invitation" block
          >Create Button</AppButton
        >
        <div
          class="flex items-center gap-2 justify-center text-sm text-dashboard-text"
        >
          Having issues?
          <a href="#" class="text-dashboard-heading hover:text-brand-color-007"
            >Contact Support</a
          >
        </div>
      </div>
      <!-- login button end-->
    </div>
  </div>
</template>
