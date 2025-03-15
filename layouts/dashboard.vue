<script setup lang="ts"></script>

<template>
  <div class="flex w-full font-body">
    <!-- sidebar -->
    <Sidebar></Sidebar>
    <!-- sidebar end-->

    <!-- body -->
    <div class="flex-grow min-h-screen">
      <!-- utility section -->
      <UtilityBar></UtilityBar>
      <!-- utility section end-->

      <main class="p-5 md:p-8">
        <div class="max-w-[1600px] mx-auto">
          <slot />
        </div>
      </main>
    </div>
    <!-- body end-->
  </div>
</template>
