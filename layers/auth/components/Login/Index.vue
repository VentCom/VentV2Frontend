<script setup lang="ts">
import { LoginForm, LoginIllustration } from "#components";
</script>

<template>
  <div
    class="w-full flex flex-col md:flex-row font-body p-5 min-h-screen md:items-stretch relative overflow-hidden"
  >
    <img
      src="/img/quote_1.jpeg"
      class="absolute top-0 left-0 w-full h-full z-1"
      alt="bg"
    />

    <div
      class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#002233] to-60% to-[#0D6A980D] z-2"
    ></div>

    <div class="hidden md:block w-[648px] shrink-0 sticky top-0 z-3">
      <LoginIllustration></LoginIllustration>
    </div>

    <div
      class="flex items-end justify-center relative min-h-full grow p-5 pb-0 bg-dashboard-bg rounded-4xl z-3"
    >
      <LoginForm></LoginForm>
    </div>
  </div>
</template>
