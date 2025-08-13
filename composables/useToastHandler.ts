type AlertTypes = "success" | "error" | "info" | null;

interface IAlert {
  type: AlertTypes;
  message: string | undefined;
  heading: string;
}
export const useToastHandler = () => {
  const toastTimeoutId = useState<NodeJS.Timeout>("toast.TimeoutId");

  const toastBody = useState<IAlert>("toast.Body", () => ({
    type: null,
    message: "",
    heading: "",
  }));

  const setDefaultState = () => {
    toastBody.value = {
      type: null,
      message: "",
      heading: "",
    };
  };

  return {
    toastBody,

    triggerToast(
      message: string | undefined,
      type: AlertTypes,
      heading: string = ""
    ) {
      setDefaultState();

      toastBody.value = {
        type,
        message,
        heading,
      };

      toastTimeoutId.value = setTimeout(() => {
        setDefaultState();
      }, 4000);
    },
    closeToast() {
      setDefaultState();

      clearTimeout(toastTimeoutId.value);
    },
  };
};
