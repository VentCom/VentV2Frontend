<script lang="ts" setup>
const { minimizeSideBar } = useSidebarHandler();
</script>
<template>
  <div
    class="p-8 border-t border-dashboard-card-border grid grid-cols-1 gap-6 shrink-0"
  >
    <!-- user profile -->
    <div
      class="flex items-center gap-3"
      :class="{
        'md:justify-center': minimizeSideBar,
      }"
    >
      <img
        src="/img/profile-image.png"
        class="w-8 h-8 object-center object-cover rounded-full bg-brand-color-default"
        alt="profile image"
      />

      <div
        class="overflow-hidden"
        :class="{
          'md:hidden': minimizeSideBar,
        }"
      >
        <h6
          class="text-sm font-bold text-sidebar-profile-name transition-all duration-500 ease-in-out whitespace-nowrap text-ellipsis overflow-hidden"
        >
          Blessing Ruben - VR3I7
        </h6>
        <p class="text-xs text-sidebar-profile-role">Lead Admin</p>
      </div>
    </div>
    <!-- user profile end-->

    <!-- clock in time -->
    <ul
      class="flex items-stretch gap-2 rounded-xl border border-[#E5E5FF] bg-[#F8F9FC] border-dashed p-2.5 place-items-stretch"
    >
      <li
        class="flex-grow"
        :class="{
          'md:hidden': minimizeSideBar,
        }"
      >
        <div
          class="w-full rounded-lg ring-1 ring-[#CCD6EB] p-0.5 bg-gradient-to-b from-[#FFFFFF] to-[#E7EEFD] h-full"
        >
          <div
            class="flex items-center justify-center gap-1.5 bg-gradient-to-b from-[#ECF0F8] to-[#FFFFFF] rounded-md h-full text-[0.64rem] text-[#3B404A]"
          >
            <p>
              <span class="font-bold"> 06 </span>
              <span class="uppercase text-[#6A6E76] text-[0.48rem]">H</span>
            </p>
            <span> : </span>
            <p>
              <span class="font-bold"> 29 </span>
              <span class="uppercase text-[#6A6E76] text-[0.48rem]">M </span>
            </p>
            <span> : </span>
            <p>
              <span class="font-bold"> 02 </span>
              <span class="uppercase text-[#6A6E76] text-[0.48rem]">S </span>
            </p>
          </div>
        </div>
      </li>
      <li class="shrink-0">
        <button class="w-8 h-8 p-1 rounded-lg ring-1 ring-[#CCD6EB] group">
          <i
            class="w-full h-full flex items-center justify-center bg-[#002233] group-hover:bg-brand-color-006 transition-colors duration-500 cursor-pointer ease-in-out text-white rounded-md"
          >
            <icon name="vent:workout-run" size="1rem"></icon>
          </i>
        </button>
      </li>
    </ul>
    <!-- clock in time end-->
  </div>
</template>
