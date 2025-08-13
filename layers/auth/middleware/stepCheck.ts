export default defineNuxtRouteMiddleware((to) => {
  const onboardingStore = useOnboardingStore();
  const onboardingRouteName = onboardingStore.getOnboardingRouteName(
    to.name as string
  );
});
