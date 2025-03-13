<script lang="ts" setup>
const minimizeSideBar = ref(false);

const toggleSideBar = () => {
  minimizeSideBar.value = !minimizeSideBar.value;
};
</script>
<template>
  <!-- sidebar -->
  <nav
    class="w-full md:w-[260px] bg-white h-svh sticky top-0 shrink-0 border-r border-r-dashboard-card-border flex flex-col justify-between"
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
