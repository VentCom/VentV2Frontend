<script lang="ts" setup>
withDefaults(
  defineProps<{
    position: "left" | "center" | "right";
    widthIsFinite?: boolean;
    containerFull?: boolean;
  }>(),
  {
    position: "left",
    widthIsFinite: true,
    containerFull: false,
  }
);
const dropDownIsOpen = ref<boolean>(false);
const toggleDropdown = () => (dropDownIsOpen.value = !dropDownIsOpen.value);
const closeDropdown = () => (dropDownIsOpen.value = false);
defineExpose({
  toggleDropdown,
  closeDropdown,
  dropDownIsOpen,
});
</script>
<template>
  <transition name="fade">
    <div
      v-if="dropDownIsOpen"
      class="w-screen h-screen fixed left-0 bottom-0 right-0 top-0 z-[100]"
      @click="closeDropdown"
    ></div>
  </transition>
  <div
    class="inline-flex relative"
    :class="{
      'w-auto': containerFull === false,
      'w-full': containerFull === true,
    }"
  >
    <div
      class="inline-block w-full cursor-pointer"
      tabindex="-1"
      @click="toggleDropdown"
    >
      <slot></slot>
    </div>
    <transition name="slideUp">
      <div
        v-if="dropDownIsOpen"
        class="absolute inline-block top-[120%] overflow-hidden z-[240] border border-dropdown-border rounded-lg bg-dropdown-outline shadow-lg shadow-slate-300/40 p-0.5"
        :class="{
          'left-0': position === 'left',
          'right-0': position === 'right',
          'left-[50%] -translate-x-[50%]': position === 'center',
          'w-auto': widthIsFinite === false,
          'w-[10rem]': widthIsFinite === true,
        }"
      >
        <div
          class="bg-dashboard-bg rounded-md px-2 py-2 border border-dropdown-border"
        >
          <slot name="dropdown_body"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
