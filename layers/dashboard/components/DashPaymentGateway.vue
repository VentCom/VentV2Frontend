<template>
  <div
    class="p-6 border border-dashboard-card-border rounded-xl grid grid-cols-1 gap-11"
  >
    <!-- Heading -->
    <div class="flex justify-between items-start gap-4">
      <div class="grow">
        <h2 class="font-bold text-dashboard-heading mb-1 text-base md:text-xl">
          Payment Gateways
        </h2>
        <p class="text-[0.813rem]">
          We have a few available and fully funded payment gateways to enable
          you process payouts.
        </p>
      </div>

      <div
        class="border border-dashboard-card-border rounded-full p-3 text-sm font-alternative font-semibold shrink-0"
      >
        <span class="text-dashboard-heading">2</span><span>/5</span>
      </div>
    </div>
    <!-- Heading end -->

    <!-- Gateways -->
    <div class="w-full grid grid-cols-1 gap-2">
      <div
        class="bg-[#EFFAFF] border border-[#DFF5FF] p-2.5 rounded-lg flex justify-between items-center relative overflow-hidden"
      >
        <img
          src="/img/gateways-blue.png"
          class="absolute right-0 top-0 w-[40%] h-full z-1"
          alt=""
        />

        <!-- Service detail -->
        <div class="flex items-center gap-2 relative z-2">
          <div
            class="w-16 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#006699] to-[#002233] text-white text-xs shrink-0 md:text-[0.813rem] font-alternative font-semibold"
          >
            Glyde.
          </div>

          <div>
            <h2
              class="font-bold font-alternative text-xs md:text-base text-dashboard-heading"
            >
              N450,891.40
            </h2>
            <p
              class="text-[0.45rem] md:text-[0.6rem] uppercase tracking-widest text-dropdown-heading"
            >
              Fully funded on Glyde || 30 minutes ago
            </p>
          </div>
        </div>
        <!-- Service detail -->

        <!-- action btn -->
        <button
          class="bg-white rounded-lg py-2.5 px-4 md:px-4 text-dashboard-heading font-bold text-[0.6rem] md:text-sm whitespace-nowrap relative z-2"
        >
          Open <span class="hidden md:inline-block">Glyde</span>
        </button>
        <!-- action btn end-->
      </div>

      <div
        class="bg-[#FFF8F4] border border-[#FFE9DC] p-2.5 rounded-lg flex justify-between items-center overflow-hidden relative"
      >
        <img
          src="/img/gateways-red.png"
          class="absolute right-0 top-0 w-[40%] h-full z-1"
          alt=""
        />

        <!-- Service detail -->
        <div class="flex items-center gap-2 relative z-2">
          <div
            class="w-16 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#161F23] to-[#CF7779] text-white text-xs shrink-0 md:text-[0.813rem] font-alternative font-semibold"
          >
            CN.C
          </div>

          <div>
            <h2
              class="font-bold font-alternative text-xs md:text-base text-dashboard-heading"
            >
              N120,819.90
            </h2>
            <p
              class="text-[0.45rem] md:text-[0.6rem] uppercase tracking-widest text-dropdown-heading"
            >
              Fully funded on Vent Bank || 13 Hours ago
            </p>
          </div>
        </div>
        <!-- Service detail -->

        <!-- action btn -->
        <button
          class="bg-white rounded-lg py-2.5 px-4 md:px-4 text-dashboard-heading font-bold text-[0.6rem] md:text-sm whitespace-nowrap relative z-2"
        >
          Open <span class="hidden md:inline-block">V.Bank</span>
        </button>
        <!-- action btn end-->
      </div>
    </div>
    <!-- Gateways end-->
  </div>
</template>
