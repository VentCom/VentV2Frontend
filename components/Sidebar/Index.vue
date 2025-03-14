<script lang="ts" setup>
const { minimizeSideBar, sidebarOpened } = useSidebarHandler();
</script>
<template>
  <!-- sidebar -->
  <nav
    class="bg-white h-svh fixed left-0 z-30 md:sticky top-0 shrink-0 border-r border-r-dashboard-card-border flex flex-col justify-between transition-all duration-300 ease-in-out"
    :class="{
      'hide-sidebar': !sidebarOpened,
      'minimize-sidebar': minimizeSideBar,
      'maximize-sidebar': !minimizeSideBar,
    }"
  >
    <!-- Sidebar Header -->
    <SidebarHeader></SidebarHeader>
    <!-- Sidebar Header end-->

    <!-- sidebar body -->
    <SidebarBody></SidebarBody>
    <!-- sidebar body end-->

    <!-- SideBar footer -->
    <SidebarFooter></SidebarFooter>
    <!-- SideBar footer end-->
  </nav>
  <!-- sidebar end-->
</template>

<style scoped>
@reference "~/assets/css/main.css";

.hide-sidebar {
  @apply translate-x-[-130%] md:translate-x-0;
}

.minimize-sidebar {
  @apply w-full md:w-[120px];
}

.maximize-sidebar {
  @apply w-full md:w-[260px];
}
</style>
