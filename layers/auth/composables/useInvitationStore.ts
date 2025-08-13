import { useApiClientHandler } from "~/composables/useApiClientHandler";
import { ApiErrorHandler } from "~/utils/helpers/ApiErrorHandler";
import type { IResponse } from "~/utils/types/misc/ResponseBody";

export interface IInvitationResponse {
  user: User;
  qrCodeUrl: string;
  "2faSecret": string;
  recoveryCodes: string[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  reference: string;
}

export const useInvitationStore = () => {
  const endpoints = {
    ACCEPT_INVITATION: "/admin/accept-invitations",
  };

  const states = {
    accepting_invitation: useState<boolean>(
      "useInvitationStore.accepting_invitation",
      () => false
    ),
    token: useState<string>("useInvitationStore.token", () => ""),
    responseData: useState<IInvitationResponse>(
      "useInvitationStore.responseData",
      () => responseData
    ),
  };

  const actions = {
    /**
     * Accepts an invitation to join an organization
     * @param invitationId - The ID of the invitation to accept
     * @returns Promise<void>
     */
    acceptInvitation: async (payload: {
      password: string;
      password_confirmation: string;
    }) => {
      states.accepting_invitation.value = true;
      return await useApiClientHandler()
        .$apiClient<IResponse<IInvitationResponse>>(
          endpoints.ACCEPT_INVITATION,
          {
            method: "POST",
            body: { ...payload, token: states.token.value },
          }
        )
        .then((res) => {
          states.responseData.value = res.data;
          return res;
        })
        .catch((err) => {
          ApiErrorHandler(err, true, false);
        })
        .finally(() => {
          states.accepting_invitation.value = false;
        });
    },

    setToken: (token: string) => {
      states.token.value = token;
    },
  };

  return {
    ...states,
    ...actions,
  };
};

const responseData = {
  user: {
    id: 1,
    name: "John Doe",
    email: "nkezesylvester22@gmail.com",
    isAdmin: true,
    reference: "02798b97-cb18-4094-aec6-b9c44d3d767a",
  },
  qrCodeUrl:
    "otpauth://totp/Laravel:nkezesylvester22%40gmail.com?secret=EXN27OPNUEKDGOR2&issuer=Laravel&algorithm=SHA1&digits=6&period=30",
  "2faSecret": "EXN27OPNUEKDGOR2",
  recoveryCodes: [
    "2S36ZXMREL",
    "TVBXPVCBCB",
    "3B3MDFD6TX",
    "TUQ31IJW9H",
    "HSB8PZMSUH",
    "FAV7A5IWWT",
    "IGZCER1G7T",
    "TFBVUTJEJH",
    "XZ1ITXKU52",
    "HB6T2UFLI6",
  ],
};
