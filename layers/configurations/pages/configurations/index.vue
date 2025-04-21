<script lang="ts" setup>
import {
  ConfigGeneralAppIcon,
  ConfigGeneralAppVersion,
  ConfigGeneralMaintenanceMode,
  ConfigGeneralSocials,
} from "#components";
import AppIcon from "../../components/Config/General/AppIcon.vue";

definePageMeta({
  pageTransition: { name: "page-zoom", mode: "out-in" },
});
</script>
<template>
  <div>
    <!-- heading -->
    <div class="w-full mb-8">
      <h2 class="font-bold text-dashboard-heading mb-1 text-xl md:text-2xl">
        General
      </h2>
      <p class="text-[0.813rem] text-dashboard-text">
        Customize your settings more efficient experience across all platforms
      </p>
    </div>
    <!-- heading end-->

    <div class="grid grid-cols-1 gap-8">
      <ConfigGeneralAppIcon></ConfigGeneralAppIcon>

      <ConfigGeneralAppVersion></ConfigGeneralAppVersion>

      <ConfigGeneralMaintenanceMode></ConfigGeneralMaintenanceMode>

      <ConfigGeneralSocials></ConfigGeneralSocials>
    </div>
  </div>
</template>
