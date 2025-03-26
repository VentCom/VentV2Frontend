<script setup lang="ts">
const collapseInfo = ref(true);

const toggleCollapsable = () => {
  collapseInfo.value = !collapseInfo.value;
};
</script>

<template>
  <!-- single settlement -->
  <div
    class="border border-dashboard-card-border p-6 md:p-11 gap-4 collapsable"
    :class="{
      show: !collapseInfo,
    }"
  >
    <div class="flex justify-between items-start w-full md:grow">
      <div class="flex flex-col w-full gap-2">
        <h4
          class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading flex items-center gap-2"
        >
          <span>Payout amount</span>
          <ul class="flex items-center gap-2">
            <li class="w-1.5 aspect-square rounded-full bg-green-005"></li>
            <li class="w-1.5 aspect-square rounded-full bg-green-005"></li>
          </ul>
        </h4>

        <p class="font-bold text-xl">NGN1,000,320.62</p>

        <div class="flex items-center gap-2">
          <span
            class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading flex items-center gap-2"
          >
            <span class="text-dashboard-text">Through</span>
            Glyde
          </span>

          <span
            class="text-sm md:hidden"
            :class="{
              hidden: !collapseInfo,
            }"
          >
            <AppPills color="green">Completed</AppPills>
          </span>
        </div>
      </div>

      <button
        @click="toggleCollapsable"
        class="md:hidden shrink-0 text-dashboard-heading text-[0.813rem] border cursor-pointer border-dashboard-card-border rounded-full w-7 h-7 md:w-auto md:h-auto flex items-center justify-center py-2 px-2 md:py-2 md:px-4.5 hover:shadow-2xl hover:shadow-brand-color-010 hover:border-brand-color-default transition-all duration-300 ease-in-out"
      >
        <span
          class="md:hidden inline-block transition-all ease-in duration-300 origin-center"
          :class="{
            'rotate-180': !collapseInfo,
            'mt-1': collapseInfo,
          }"
        >
          <Icon name="vent:arrow-down" size="1.2rem"></Icon>
        </span>
      </button>
    </div>

    <!-- details -->
    <ul
      class="w-full md:w-[878px] grid grid-cols-2 md:grid-cols-3 gap-5 gap-y-8 md:pt-0 md:shrink-0 collapsible-content"
      :class="{
        'pt-6': !collapseInfo,
      }"
    >
      <li>
        <p
          class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
        >
          Beneficiary Bank
        </p>
        <p class="flex items-center gap-1">Guaranty Trust Bank</p>
      </li>

      <li>
        <p
          class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
        >
          Account Number
        </p>
        <p class="flex items-center gap-1">0011223344</p>
      </li>

      <li>
        <p
          class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
        >
          account Name
        </p>
        <p class="flex items-center gap-1">Johnny Doe Young</p>
      </li>

      <li>
        <p
          class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
        >
          Settled by
        </p>
        <p class="flex items-center gap-1">Peremobowei Agiddi</p>
      </li>

      <li>
        <p
          class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
        >
          Status
        </p>
        <AppPills color="green">Completed</AppPills>
      </li>

      <li>
        <p
          class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
        >
          Time paid
        </p>
        Mar 18, 2025 1:42PM
      </li>
    </ul>
    <!-- details end-->
  </div>
  <!-- single settlement end-->
</template>

<style scoped>
@reference "~/assets/css/main.css";

.collapsable {
  @apply grid md:flex md:flex-row;
  grid-template-rows: auto 0fr;
  grid-template-columns: 1fr;
  gap: 0px;
  transition: grid-template-rows 0.3s ease;
  overflow: hidden;
}

.collapsable.show {
  grid-template-rows: auto 1fr !important;
  gap: 16px;
}

.collapsible-content {
  overflow: hidden;
}
</style>
