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

        <footer
          class="hidden md:flex items-center mt-5 border-t border-dashboard-card-border pt-7.5 justify-between"
        >
          <p class="text-[0.813rem] text-dashboard-text font-medium">
            All Rights Reserved <span class="text-lg"> &copy;</span> 2025. Vent
            Africa
          </p>

          <AppDashboardSwitch></AppDashboardSwitch>
        </footer>
      </main>
    </div>
    <!-- body end-->
  </div>
</template>
