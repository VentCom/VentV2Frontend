export enum CustomerView {
  MINIMAL = "MINIMAL",
  FULL = "FULL",
}
export const useCustomerConfig = () => {
  const state = {
    singleCustomerView: useState(
      "useCustomerConfig.singleCustomerView",
      () => CustomerView.MINIMAL
    ),
  };

  const actions = {
    activateFullView: () => {
      state.singleCustomerView.value = CustomerView.FULL;
    },

    activateMiniView: () => {
      state.singleCustomerView.value = CustomerView.MINIMAL;
    },
  };

  return {
    ...state,
    ...actions,
  };
};
