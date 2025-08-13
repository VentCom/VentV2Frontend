<script lang="ts" setup>
import { AppModal, AuthoriserModalSetupComplete } from "#components";
import { generateQRCode } from "~/utils/helpers/QrCodeGenerator";

const steps = ref([
  {
    position: 1,
    text: "Open your authenticator app (Google Authenticator, Microsoft Authenticator, etc.) to scan QR code",
  },
  {
    position: 2,
    text: "Make sure your phone is connected to the internet",
  },
  {
    position: 3,
    text: "Focus your phone’s camera on the QR code to login to your Vent Account",
  },
]);

const { responseData } = useInvitationStore();

const generatedQrImage = ref<string>("");

const qrCodeUrl = computed(() => responseData.value.qrCodeUrl || null);

const tFaSecret = computed(() => {
  const secret = responseData.value["2faSecret"];
  if (!secret) return "";
  // Add dash after every 4 characters
  return secret.replace(/(.{4})/g, "$1-").slice(0, -1); // Remove trailing dash
});

const setupCompleteModal = ref<InstanceType<typeof AppModal> | null>(null);

const goToNextStage = () => {
  setupCompleteModal.value?.showDialogBox();
};

const handleQrCode = () => {
  generateQRCode(
    {
      text: qrCodeUrl.value || "",
      width: 400,
      color: "#000000",
    },
    "qrserver"
  ).then((res) => {
    generatedQrImage.value = res.dataUrl || "";
  });
};

watch(
  qrCodeUrl,
  () => {
    qrCodeUrl.value !== null && handleQrCode();
  },
  {
    immediate: true,
  }
);
</script>
<template>
  <Teleport to="body">
    <AppModal hidePattern ref="setupCompleteModal">
      <AuthoriserModalSetupComplete></AuthoriserModalSetupComplete>
    </AppModal>
  </Teleport>
  <div
    class="w-full min-h-screen flex items-center justify-center p-6 font-body text-default-text"
  >
    <div
      class="max-w-[1284px] w-full flex flex-col md:flex-row md:justify-between md:items-center gap-5"
    >
      <!-- instruction -->
      <div class="w-full md:w-[553px] flex flex-col gap-11">
        <img src="/img/logo.svg" class="w-[52.94px]" alt="vent logo" />

        <h1
          class="font-semibold text-6xl text-dashboard text-default-text tracking-tight"
        >
          Secure your account with 2FA
        </h1>

        <div>
          <p class="text-[0.68rem] uppercase font-medium tracking-widest mb-8">
            Next steps:
          </p>

          <ul class="flex flex-col gap-8">
            <li
              v-for="(step, index) in steps"
              :key="index"
              class="flex items-start gap-6"
            >
              <span
                class="flex w-6 aspect-square rounded-full bg-default-text items-center justify-center text-default-bg text-[0.625rem] shrink-0 mt-1"
              >
                {{ step.position }}
              </span>
              <span class="text-lg md:text-2xl">
                {{ step.text }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <!-- instruction end-->

      <!-- qr code -->
      <div class="w-full md:w-[449px] flex flex-col gap-4">
        <div
          class="bg-default-bg border-12 rounded-4xl overflow-hidden border-brand-color-default w-full mb-6"
        >
          <img :src="generatedQrImage" class="w-full" alt="" />
        </div>

        <!-- divider -->
        <div class="flex flex-col items-center">
          <span
            class="border-b block w-full border border-dashboard-card-divider"
          ></span>
          <p
            class="text-[0.68rem] text-center uppercase font-medium tracking-widest inline-block py-1 px-3 bg-default-bg relative z-2 -mt-3.5"
          >
            OR enter the code manually
          </p>
        </div>
        <!-- divider end-->

        <!-- code id -->
        <div class="flex gap-2">
          <div
            class="flex-grow px-8 py-3 border border-input-border rounded-2xl font-mono font-bold text-lg md:text-2xl text-center tracking-wider"
          >
            {{ tFaSecret }}
          </div>
          <button
            @click="goToNextStage"
            class="flex items-center px-4 shrink-0 text-white bg-brand-color-default rounded-2xl hover:bg-brand-color-006 cursor-pointer transition-colors ease-in-out duration-300"
          >
            Next
          </button>
        </div>
        <!-- code id end -->
      </div>
      <!-- qr code end-->
    </div>
  </div>
</template>
