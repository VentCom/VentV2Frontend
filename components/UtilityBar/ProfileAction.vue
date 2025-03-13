<template>
  <AppDropdown :widthIsFinite="false" :position="'right'">
    <ul
      class="h-12 border border-dashboard-card-border inline-flex w-auto items-center gap-2 p-1 rounded-full place-items-center hover:border-brand-color-default shadow-lg shadow-transparent hover:shadow-brand-color-009/50 transition-all duration-300 ease-in-out"
    >
      <li
        class="w-10 h-10 rounded-full overflow-hidden bg-brand-color-007 border border-dashboard-bg"
      >
        <img
          src="/img/profile-image.png"
          class="w-full h-full object-center object-cover"
          alt=""
        />
      </li>
      <li class="aspect-square overflow-hidden w-6 mr-1">
        <icon name="vent:arrow-down" size="1.3rem"></icon>
      </li>
    </ul>

    <template #dropdown_body>
      <div class="w-[262px]">
        <!-- Profile info -->
        <div
          class="flex flex-col justify-center items-center gap-4 rounded-md p-6 bg-brand-color-009/30"
        >
          <figure
            class="w-16 h-16 rounded-full overflow-hidden bg-brand-color-007 border border-dashboard-bg"
          >
            <img
              src="/img/profile-image.png"
              class="w-full h-full object-center object-cover"
              alt=""
            />
          </figure>

          <div class="flex w-full flex-col items-center gap-0.5">
            <h2 class="font-bold text-black text-sm text-center">
              Blessing Ruben - VR3I7
            </h2>
            <p class="text-center text-sm text-[#3B404A]">
              blessing.ruben@vent.africa
            </p>
            <p class="text-center text-[#6A6E76] text-[0.625rem]">
              Lead Admin Officer
            </p>
          </div>
        </div>
        <!-- Profile info end -->

        <!-- actions -->
        <ul class="w-full grid grid-cols-1 gap-2 mt-2">
          <li class="text-xs uppercase tracking-widest text-dropdown-heading">
            MISC.
          </li>
          <li class="w-full">
            <button
              class="border border-dashboard-card-border rounded-xl p-3 w-full cursor-pointer"
            >
              <ul class="flex items-center justify-between w-full">
                <li class="flex items-center gap-1">
                  <i class="w-5 block aspect-square overflow-hidden">
                    <icon name="vent:exit" size="1.2rem"></icon>
                  </i>
                  <span class="text-sm"> Clock Out </span>
                </li>
                <li
                  class="flex items-center gap-1 rounded-full border border-green-012 bg-green-014 text-green-005 text-sm px-3 py-2"
                >
                  <i class="w-5 block aspect-square overflow-hidden">
                    <icon name="vent:clock" size="1.2rem"></icon>
                  </i>
                  <span class=""> 05:32:01 </span>
                </li>
              </ul>
            </button>
          </li>

          <li>
            <button
              class="bg rounded-xl p-3 py-4 w-full flex gap-1 items-center bg-orange-013 hover:bg-orange-100 cursor-pointer"
            >
              <i class="w-5 block aspect-square overflow-hidden">
                <icon name="vent:logout" size="1.2rem"></icon>
              </i>
              <span class="text-sm text-orange-default"> Logout </span>
            </button>
          </li>
        </ul>
        <!-- actions end-->
      </div>
    </template>
  </AppDropdown>
</template>
