<script setup lang="ts">
const collapseInfo = ref(true);

const toggleCollapsable = () => {
  collapseInfo.value = !collapseInfo.value;
};
</script>

<template>
  <ul
    class="collapsable"
    :class="{
      show: !collapseInfo,
    }"
  >
    <li class="flex justify-between items-start">
      <div class="flex flex-col w-full gap-2">
        <h4
          class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading flex items-center gap-2"
        >
          <span>Payout</span>
        </h4>

        <p class="font-bold text-xl">NGN1,000,320.62</p>

        <div class="flex items-center gap-2">
          <span
            class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading flex items-center gap-2"
          >
            <span class="text-dashboard-text">Through</span>
            Glyde
          </span>

          <span v-if="collapseInfo" class="text-xs">
            <AppPills color="green">Completed</AppPills>
          </span>
        </div>
      </div>

      <button
        @click="toggleCollapsable"
        class="shrink-0 text-dashboard-heading border cursor-pointer bg-dashboard-bg-darker rounded-xl w-10 h-10 flex items-center justify-center py-2 px-2 hover:shadow-2xl hover:shadow-brand-color-010 hover:border-brand-color-default transition-all duration-300 ease-in-out"
        :class="{
          ' border-brand-color-default shadow-2xl shadow-brand-color-010':
            !collapseInfo,
          'border-dashboard-card-border': collapseInfo,
        }"
      >
        <i class="block w-6 h-6" v-if="collapseInfo">
          <icon name="vent:eye-closed" size="1.5rem"></icon>
        </i>

        <i class="block w-6 h-6" v-else>
          <icon name="vent:eye-opened" size="1.5rem"></icon>
        </i>
      </button>
    </li>

    <li class="overflow-hidden">
      <ul class="grid grid-cols-2 gap-5 gap-y-8 pt-6">
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
    </li>
  </ul>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.collapsable {
  display: grid;
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
