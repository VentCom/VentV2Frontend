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
        Security & Privacy
      </h2>
      <p class="text-[0.813rem] text-dashboard-text">
        Manage settings that protect user data and control how sensitive
        information is handled
      </p>
    </div>
    <!-- heading end-->

    <div class="grid grid-cols-1 gap-8">
      <ConfigSecurityActivityLogs></ConfigSecurityActivityLogs>
      <ConfigSecurityIPVisibility></ConfigSecurityIPVisibility>
      <ConfigSecuritySessionLogs></ConfigSecuritySessionLogs>
    </div>
  </div>
</template>
