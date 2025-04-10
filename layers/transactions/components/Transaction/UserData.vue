<template>
  <div
    class="border border-dashboard-card-border p-6 md:px-10 flex flex-col gap-11 w-full rounded-xl"
  >
    <!-- summary -->
    <div
      class="w-full flex flex-wrap md:flex-nowrap justify-between items-center gap-3 md:gap-6"
    >
      <div
        class="shrink-0 w-full flex justify-center items-center mb-6 md:mb-0 md:w-auto"
      >
        <img
          src="/img/user.jpeg"
          class="w-16 h-16 object-cover object-center rounded-full"
          alt=""
        />
      </div>

      <div class="flex justify-between items-center flex-grow">
        <!-- user data -->
        <div>
          <div class="items-center flex gap-2 mb-1">
            <h1
              class="font-bold text-dashboard-heading text-base md:text-[1.563rem]"
            >
              Johnny Doe Young
            </h1>

            <!-- country badge -->
            <img
              src="/img/ng-flag.svg"
              class="w-4 h-4 md:w-7 md:h-7 rounded-full"
              alt=""
            />
            <!-- country badge end -->

            <span class="text-xs md:text-sm">
              <AppPills>Active</AppPills>
            </span>
          </div>
          <p class="text-xs md:text-sm text-dashboard-text">
            Customer ID: 234002390029
          </p>
        </div>
        <!-- user data end-->

        <!-- bvn verification -->
        <figure class="block w-[47px] md:w-[63.42px]">
          <img
            class="w-full"
            src="/img/verify_badge__3_stars.svg"
            alt="verify badge"
          />
        </figure>
        <!-- bvn verification end-->
      </div>
    </div>
    <!-- summary end-->

    <!-- user-info -->
    <div class="w-full border-t border-dashboard-card-border pt-6">
      <h2
        class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
      >
        User’s information
      </h2>

      <ul
        class="flex justify-between md:justify-start gap-6 flex-wrap md:flex-nowrap"
      >
        <li
          class="w-[40%] md:w-auto flex items-start gap-2 text-dashboard-heading text-sm md:text-base"
        >
          <i>
            <Icon name="vent:sms" size="1.5rem"></Icon>
          </i>
          <span> exa***@email.com </span>
        </li>
        <li class="divider-vertical"></li>
        <li
          class="w-[40%] md:w-auto flex items-start gap-2 text-dashboard-heading text-sm md:text-base"
        >
          <i>
            <Icon name="vent:call" size="1.5rem"></Icon>
          </i>
          <span> +23470***678 </span>
        </li>

        <li class="hidden md:block divider-vertical"></li>

        <li class="md:hidden divider-horizontal"></li>

        <li
          class="w-[40%] md:w-auto flex items-start gap-2 text-dashboard-heading text-sm md:text-base"
        >
          <i>
            <Icon name="vent:calendar-day" size="1.5rem"></Icon>
          </i>
          <span> Joined since 2018 </span>
        </li>

        <li class="divider-vertical"></li>

        <li
          class="w-[40%] md:w-auto flex flex-wrap md:flex-nowrap items-start gap-2 text-dashboard-heading text-sm md:text-base"
        >
          <i>
            <Icon name="vent:hashtag" size="1.5rem"></Icon>
          </i>
          <span> TYiN***jmkb </span>
          <span class="text-xs md:text-sm">
            <AppPills>Active</AppPills>
          </span>
        </li>
      </ul>
    </div>
    <!-- user-info end-->
  </div>
</template>
<style scoped>
@reference "~/assets/css/main.css";

.divider-horizontal {
  @apply bg-dashboard-card-border w-full h-0.5;
  border-radius: 100%;
}

.divider-vertical {
  @apply bg-dashboard-card-border h-auto w-0.5;
  border-radius: 100%;
}
</style>
