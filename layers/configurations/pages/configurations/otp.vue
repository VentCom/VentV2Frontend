<script lang="ts" setup>
definePageMeta({
  pageTransition: { name: "page-zoom", mode: "out-in" },
});
</script>
<template>
  <div>
    <!-- heading -->
    <div class="w-full mb-8">
      <h2 class="font-bold text-dashboard-heading mb-1 text-xl md:text-2xl">
        One-Time Passwords (OTP)
      </h2>
      <p class="text-[0.813rem] text-dashboard-text">
        Configure how One-Time Passwords are handled across all platforms
      </p>
    </div>
    <!-- heading end-->

    <div class="grid grid-cols-1 gap-8">
      <ConfigOtpExpiration></ConfigOtpExpiration>

      <ConfigOtpMessagingChannels></ConfigOtpMessagingChannels>
    </div>
  </div>
</template>
