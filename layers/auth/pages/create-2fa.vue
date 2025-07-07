<script setup lang="ts">
import { AuthoriserCreate } from "#components";
definePageMeta({
  pageTransition: {
    name: "zoom",
    mode: "out-in",
  },
});
</script>

<template>
  <div>
    <AuthoriserCreate></AuthoriserCreate>
  </div>
</template>
