import { useApiClientHandler } from "~/composables/useApiClientHandler";
import { ApiErrorHandler } from "~/utils/helpers/ApiErrorHandler";
import type { IResponse } from "~/utils/types/misc/ResponseBody";

export const use2FAStore = () => {
  const endpoints = {
    VERIFY_2FA: "/admin/verify-2fa",
  };

  const states = {
    verifying_2fa: useState<boolean>(
      "useInvitationStore.verifying_2fa",
      () => false
    ),
  };

  const actions = {
    /**
     * Verify 2FA code
     * @param invitationId - The ID of the invitation to accept
     * @returns Promise<void>
     */
    verify2FA: async (otp: string) => {
      const { responseData } = useInvitationStore();
      states.verifying_2fa.value = true;
      return await useApiClientHandler()
        .$apiClient<IResponse>(endpoints.VERIFY_2FA, {
          method: "POST",
          body: {
            otp,
            userId: responseData.value?.user.id,
          },
        })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          ApiErrorHandler(err, true, false, "2FA verification failed");
        })
        .finally(() => {
          states.verifying_2fa.value = false;
        });
    },
  };

  return {
    ...states,
    ...actions,
  };
};
