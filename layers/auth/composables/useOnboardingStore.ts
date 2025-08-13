export enum OnboardingRouteNames {
  CREATE_PASSWORD = "onboarding-create-password",
  CREATE_2FA = "onboarding-create-2fa",
  VERIFY_2FA = "onboarding-verify-2fa",
  ACCEPT_INVITATION = "onboarding-token",
}

export const useOnboardingStore = () => {
  const states = {
    routeActivity: useState<Record<OnboardingRouteNames, boolean>>(
      "useOnboardingStore.routeActivity",
      () => ({
        "onboarding-create-password": false,
        "onboarding-create-2fa": false,
        "onboarding-token": true,
        "onboarding-verify-2fa": false,
      })
    ),
  };

  const actions = {
    getOnboardingRouteName: (routeName: string) => {
      return OnboardingRouteNames[
        routeName as keyof typeof OnboardingRouteNames
      ];
    },
    setRouteActivity: (routeName: OnboardingRouteNames, value: boolean) => {
      actions.deactivateAllRouteActivity();
      states.routeActivity.value[routeName] = value;
    },

    deactivateAllRouteActivity: () => {
      Object.keys(states.routeActivity.value).forEach((key) => {
        states.routeActivity.value[key as OnboardingRouteNames] = false;
      });
    },

    redirectOnFalseActivity: (routeName: OnboardingRouteNames) => {
      if (!states.routeActivity.value[routeName]) {
        navigateTo({
          name: OnboardingRouteNames.ACCEPT_INVITATION,
        });
      }
    },
  };

  return {
    ...actions,
    ...states,
  };
};
