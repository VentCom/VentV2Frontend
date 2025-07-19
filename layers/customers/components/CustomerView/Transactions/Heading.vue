<template>
  <ul class="flex items-center gap-2">
    <li>
      <button class="tab active">All</button>
    </li>
    <li>
      <button class="tab">Paid</button>
    </li>
    <li>
      <button class="tab">Unpaid</button>
    </li>
    <li class="border-r border-dashboard-card-border h-5"></li>
    <li>
      <button class="tab flex items-center">
        <Icon name="vent:search-normal" size="1.2rem"></Icon>
      </button>
    </li>
  </ul>
</template>
<style scoped>
@reference "~/assets/css/main.css";

.tab {
  @apply border border-dashboard-card-border rounded-full px-3 py-2 text-[13px] text-dashboard-text shrink-0 hover:border-brand-color-default hover:shadow-md hover:shadow-brand-color-010 cursor-pointer;
}
.tab.active {
  @apply bg-brand-color-default text-white border border-brand-color-default;
}
</style>
