<script setup lang="ts">
const isOpen = ref<boolean>(false);

const dialogBox = ref<HTMLDialogElement | null>(null);
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
  if (!dialogBox.value) return false;

  const dialogDimensions = dialogBox.value.getBoundingClientRect();
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
      @click="handleOutsideClick($event)"
      @touchEnd="handleOutsideTouchClick($event)"
      class="dialog-box"
    >
      <Transition name="slideInLeft">
        <div class="dialog-body" v-if="isOpen">
          <button @click="hideDialogBox" class="dialog--close-btn">
            <icon name="vent:close" size="1.5rem"></icon>
          </button>
          <div class="max-h-[100%] overflow-y-auto h-full">
            <slot></slot>
          </div>
        </div>
      </Transition>
    </dialog>
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.dialog-box {
  @apply z-70 w-full md:w-[700px] h-[1000px] p-4 right-0 bottom-0 bg-transparent m-0 inset-auto transform-none outline-none overflow-visible;
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
  @apply w-full h-full bg-white rounded-3xl p-4 md:p-16 relative;
}

.dialog-box .dialog--close-btn {
  @apply md:absolute md:left-0 border border-dashboard-card-border md:border-0 md:top-20 md:translate-[-50%] rounded-full w-[48px] h-[48px] ml-auto md:ml-0 flex items-center justify-center cursor-pointer;
  @apply rounded-full bg-white text-dashboard-heading hover:text-brand-color-default;
}
</style>
