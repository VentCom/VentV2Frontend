import { CookieManager } from "~/utils/helpers/CookieManager";
import {
  ResponseEnum,
  ResponseEvents,
  type IResponse,
} from "~/utils/types/misc/ResponseBody";

export const useApiClientHandler = (allowContentType: boolean = true) => {
  const baseURL = (useRuntimeConfig().public.API_URL as string) || "";

  const $apiClient = $fetch.create({
    baseURL,
    onRequest({ options }) {
      // Only set Content-Type if it's not already set (for multipart/form-data)
      allowContentType &&
        options.headers.set("Content-Type", "application/json");
      options.headers.set("Accept", `application/json`);
      // options.headers.set(
      //   "Authorization",
      //   `Bearer ${CookieManager.getCookieValue("tk")}`
      // );
      options.credentials = "include";
    },
    onResponse({ response }) {
      const res = response._data as IResponse;
      if (
        res.event === ResponseEvents.TWO_FACTOR_ENABLED &&
        useRoute().path !== "/otp"
      ) {
        navigateTo("/otp", { external: true });
      }
    },
    onResponseError({ response }) {
      const statusMessage =
        response?.status === 401 ? "Unauthorized" : "Response failed";
    },
  });

  return {
    $apiClient,
  };
};
