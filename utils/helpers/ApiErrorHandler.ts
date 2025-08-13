import type { NuxtError } from "#app";
import type { IResponse } from "../types/misc/ResponseBody";

export const ApiErrorHandler = <T = any>(
  e: any,
  triggerToast: boolean = true,
  authFailRedirect: boolean = false,
  heading: string = ""
) => {
  const error = e as NuxtError<IResponse<T>>;
  if (triggerToast) {
    useToastHandler().triggerToast(error.data?.message, "error", heading);
  }

  if (error.statusCode === 401 && authFailRedirect) {
    navigateTo("/", { external: true });
  }
};
