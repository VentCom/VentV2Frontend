<script setup lang="ts">
import { AppButton } from "#components";
import { copyToClipboardWithResult } from "~/utils/helpers/ClipboardCopy";

const { responseData } = useInvitationStore();

const { setRouteActivity } = useOnboardingStore();

const recoveryCodes = computed(() => {
  return responseData.value.recoveryCodes;
});

const joinedRecoveryCodes = computed(() => {
  return recoveryCodes.value.join(" , ");
});

const copyToClipboard = async () => {
  const result = await copyToClipboardWithResult(joinedRecoveryCodes.value);
  useToastHandler().triggerToast(
    "Recovery keys copied to clipboard",
    "success",
    "Copied Successfully"
  );
};

const goTo2FaVerify = () => {
  setRouteActivity(OnboardingRouteNames.VERIFY_2FA, true);
};
</script>

<template>
  <div class="grid grid-cols-1 gap-10">
    <div class="flex flex-col gap-6 items-center">
      <img src="/img/succesTag.svg" class="w-[72px]" alt="" />

      <div>
        <h1 class="text-2xl font-semibold text-center mb-2">
          2FA Setup Successful
        </h1>
        <p class="text-center text-dashboard-text">
          You’ve successfully enabled 2FA on this device. Please save the
          recovery keys below — they’ll be essential if you ever lose access to
          your device.
        </p>
      </div>

      <div class="w-full">
        <div class="border border-dashboard-card-border rounded-[12px] p-6">
          <h2 class="text-dashboard-text-light mb-2 text-[13px]">
            Recovery Keys
          </h2>

          <div
            class="grid grid-cols-2 gap-x-3 gap-y-1 text-dashboard-text text-[13px] font-mono w-full"
          >
            <p v-for="(code, index) in recoveryCodes">{{ code }},</p>
          </div>
        </div>
        <button
          @click="copyToClipboard"
          class="mt-3 rounded-full px-4 py-2 border border-brand-color-007 text-brand-color-007 text-[13px] cursor-pointer"
        >
          Copy Keys
        </button>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="w-[245px]">
        <AppButton @click="goTo2FaVerify" block
          >I have copied the keys</AppButton
        >
      </div>
    </div>
  </div>
</template>
