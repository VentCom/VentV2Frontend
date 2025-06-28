<template>
  <div class="flex flex-col items-center gap-6 relative w-full">
    <img
      src="/img/user.jpeg"
      class="w-31 h-31 rounded-full border-10 border-dashboard-bg object-top object-cover"
      alt="user avatar"
    />

    <!-- Profile data -->
    <div>
      <div class="items-center flex gap-2 mb-1">
        <h1 class="font-medium text-dashboard-heading text-base md:text-xl">
          Johnny Doe Young
        </h1>

        <span class="text-xs md:text-sm">
          <AppPills color="green">Active</AppPills>
        </span>
      </div>
      <p class="flex items-center gap-1 justify-center group">
        <span class="text-xs md:text-sm text-dashboard-text-light">
          ID: 234002390029
        </span>
        <button
          class="inline-block mt-1 group-hover:text-brand-color-default text-dashboard-text-light"
        >
          <Icon name="vent:copy" size="1.2rem"></Icon>
        </button>
      </p>
    </div>
    <!-- Profile data -->
  </div>
</template>
