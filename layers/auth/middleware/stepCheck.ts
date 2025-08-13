export default defineNuxtRouteMiddleware((to) => {
  const onboardingStore = useOnboardingStore();
  console.log(to.name as string);
  const onboardingRouteName = onboardingStore.getOnboardingRouteName(
    to.name as string
  );
  console.log("onboardingRouteName", onboardingRouteName);
  //   onboardingStore.redirectOnFalseActivity(onboardingRouteName);
});
