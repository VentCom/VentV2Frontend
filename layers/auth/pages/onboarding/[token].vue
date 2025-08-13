<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "zoom",
    mode: "out-in",
  },
});

import { OnboardingRouteNames } from "~/layers/auth/composables/useOnboardingStore";

const { routeActivity } = useOnboardingStore();

// Computed property to determine which component to show
const currentStep = computed(() => {
  if (routeActivity.value[OnboardingRouteNames.ACCEPT_INVITATION])
    return "welcome";
  if (routeActivity.value[OnboardingRouteNames.CREATE_PASSWORD])
    return "create-password";
  if (routeActivity.value[OnboardingRouteNames.CREATE_2FA]) return "create-2fa";
  if (routeActivity.value[OnboardingRouteNames.VERIFY_2FA]) return "verify-2fa";
  return "welcome";
});
</script>
<template>
  <div>
    <AppToast />
    <section class="onboarding-container">
      <Transition name="fade-slide" mode="out-in" appear>
        <div :key="currentStep" class="step-wrapper">
          <AuthoriserWelcome v-if="routeActivity['onboarding-token']" />

          <AuthoriserCreatePassword
            v-if="routeActivity['onboarding-create-password']"
          />

          <AuthoriserCreate v-if="routeActivity['onboarding-create-2fa']" />

          <AuthoriserFirstVerify
            v-if="routeActivity['onboarding-verify-2fa']"
          />
        </div>
      </Transition>
    </section>
  </div>
</template>

<style scoped>
.onboarding-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.step-wrapper {
  width: 100%;
  max-width: 100%;
}

/* Improved transition for onboarding steps */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: absolute;
  width: 100%;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* Ensure smooth positioning */
.fade-slide-enter-active {
  position: relative;
}

.fade-slide-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>
