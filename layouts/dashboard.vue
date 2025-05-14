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

      <main class="p-5 md:p-8 pb-20 md:pb-20">
        <div class="max-w-[1600px] mx-auto min-h-[calc(100vh-160px)]">
          <slot />
        </div>
      </main>
    </div>
    <!-- body end-->
  </div>
</template>
