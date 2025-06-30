<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    desktopWidth?: string;
    hidePattern?: boolean;
  }>(),
  {
    desktopWidth: "700px",
    hidePattern: false,
  }
);

const isOpen = ref<boolean>(false);

const dialogBox = ref<HTMLDialogElement | null>(null);
const dialogBoxBody = ref<HTMLDivElement | null>(null);

const showDialogBox = () => {
  document.querySelector("body")?.classList.add("overflow-hidden");
  isOpen.value = true;
  dialogBox.value?.showModal();
};

const hideDialogBox = () => {
  document.querySelector("body")?.classList.remove("overflow-hidden");
  isOpen.value = false;
  setTimeout(() => {
    dialogBox.value?.close();
  }, 400);
};

// Helper function to check if click/touch is outside dialog
const isOutsideDialog = (clientX: number, clientY: number): boolean => {
  if (!dialogBoxBody.value) return false;

  const dialogDimensions = dialogBoxBody.value.getBoundingClientRect();
  return (
    clientX < dialogDimensions.left ||
    clientX > dialogDimensions.right ||
    clientY < dialogDimensions.top ||
    clientY > dialogDimensions.bottom
  );
};

const handleOutsideClick = (e: MouseEvent) => {
  if (isOutsideDialog(e.clientX, e.clientY)) {
    hideDialogBox();
  }
};

const handleOutsideTouchClick = (e: TouchEvent) => {
  if (e.changedTouches.length > 0) {
    const touch = e.changedTouches[0];
    if (isOutsideDialog(touch.clientX, touch.clientY)) {
      hideDialogBox();
    }
  }
};

defineExpose({
  showDialogBox,
  hideDialogBox,
});
</script>
<template>
  <div class="font-body">
    <dialog
      ref="dialogBox"
      class="dialog-box w-full md:w-[var(--desktop-width)]"
      :style="{ '--desktop-width': props.desktopWidth }"
      @keydown.prevent.esc="hideDialogBox()"
      @click="handleOutsideClick($event)"
      @touchEnd="handleOutsideTouchClick($event)"
    >
      <Transition name="slideUp">
        <div
          v-if="isOpen"
          class="flex flex-col justify-end md:justify-center h-full w-full"
        >
          <div ref="dialogBoxBody" class="dialog-body relative">
            <img
              v-if="!props.hidePattern"
              src="/img/modal-header.svg"
              class="w-[50%] absolute right-0 top-10"
              alt=""
            />
            <div class="flex justify-end shrink-0 w-full p-6 relative z-2">
              <button @click="hideDialogBox" class="dialog--close-btn">
                <icon name="vent:x" size="1.5rem"></icon>
              </button>
            </div>
            <div
              class="grow overflow-y-auto h-full w-full p-6 md:p-16 pt-0 md:pt-0 relative z-2"
            >
              <slot></slot>
            </div>
          </div>
        </div>
      </Transition>
    </dialog>
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.dialog-box {
  @apply z-70  h-screen p-4 right-[50%] translate-x-[50%] bottom-0 bg-transparent m-0 inset-auto transform-none outline-none overflow-visible;
  position: fixed;
}

.dialog-box:-internal-dialog-in-top-layer {
  max-height: 100vh !important;
  max-width: 100vw !important;
}
.dialog-box::backdrop {
  @apply p-0 bg-black/40 backdrop-blur-md;
}

.dialog-box .dialog-body {
  @apply w-full max-h-full min-h-[50%] bg-white rounded-3xl flex flex-col relative border-[6px] border-[#EDF3FF];
}

.dialog-box .dialog--close-btn {
  @apply md:left-0 border border-dashboard-card-border rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer;
  @apply rounded-full bg-dashboard-bg text-dashboard-heading hover:border-brand-color-default hover:text-brand-color-default;
}
</style>
