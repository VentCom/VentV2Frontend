<script setup lang="ts">
import { LoginForm, LoginIllustration } from "#components";
</script>

<template>
  <div class="w-full flex flex-col md:flex-row font-body">
    <div
      class="flex items-end justify-center relative min-h-screen grow p-5 pb-0"
    >
      <LoginForm></LoginForm>
    </div>

    <div
      class="p-5 hidden md:block w-[648px] shrink-0 min-h-screen sticky top-0"
    >
      <LoginIllustration></LoginIllustration>
    </div>
  </div>
</template>
