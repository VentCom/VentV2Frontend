<script setup lang="ts">
const isOpen = ref(false);

const toggleCollapsable = () => {
  isOpen.value = !isOpen.value;
};
</script>
<template>
  <div>
    <!-- card container -->
    <div
      class="gap-2 collapsable"
      :class="{ 'gap-1 show': isOpen, 'gap-0': !isOpen }"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <CustomerListSingleUserWalletAddressesCard
          v-for="card in 3"
        ></CustomerListSingleUserWalletAddressesCard>
      </div>

      <!-- collapsable content -->
      <div class="collapsable-content grid grid-cols-1 md:grid-cols-3 gap-3">
        <CustomerListSingleUserWalletAddressesCard
          v-for="card in 3"
        ></CustomerListSingleUserWalletAddressesCard>
      </div>
      <!-- collapsable content -->
    </div>
    <!-- card container -->

    <!-- collapse button -->
    <div class="flex justify-between items-center mt-3.5 w-full gap-2">
      <p class="text-dashboard-text-light text-[13px] shrink-0">
        Showing 6 of 6
      </p>
      <div class="border-t border-dashboard-card-border w-full"></div>
      <button
        @click="toggleCollapsable"
        class="border border-dashboard-card-border rounded-[8px] px-3 py-2.5 text-[13px] text-dashboard-text shrink-0 hover:border-brand-color-default hover:shadow-md hover:shadow-brand-color-010 cursor-pointer"
      >
        {{ isOpen ? "Collapse" : "Expand" }}
      </button>
    </div>
    <!-- collapse button end-->
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.collapsable {
  display: grid;
  grid-template-rows: auto 0fr;
  grid-template-columns: 1fr;
  transition: grid-template-rows 0.3s ease;
  overflow: hidden;
}

.collapsable.show {
  grid-template-rows: auto 1fr !important;
  gap: 16px;
}

.collapsable-content {
  overflow: hidden;
}
</style>
