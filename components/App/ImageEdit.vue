<script setup lang="ts">
const selectedImageUrl = ref("/img/logo_placeholder.svg");
const collectImage = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];
  selectedImageUrl.value = URL.createObjectURL(file!);
  console.log(selectedImageUrl.value);
};
</script>
<template>
  <label
    tabindex="0"
    class="w-[64px] cursor-pointer h-[64px] shrink-0 relative block"
  >
    <input type="file" @change="collectImage" name="" class="sr-only" id="" />
    <img
      :src="selectedImageUrl"
      class="w-full h-full object-cover rounded-full"
      alt=""
    />
    <button
      class="w-6 h-6 flex items-center text-white justify-center bg-brand-color-default border-2 border-white rounded-full absolute right-0 bottom-0 z-2"
    >
      <icon name="vent:edit" size="0.7rem"></icon>
    </button>
  </label>
</template>
