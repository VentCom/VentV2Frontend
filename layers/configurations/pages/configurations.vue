<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  pageTransition: { name: "page-zoom", mode: "out-in" },
});
</script>
<template>
  <Config>
    <NuxtPage></NuxtPage>
  </Config>
</template>
