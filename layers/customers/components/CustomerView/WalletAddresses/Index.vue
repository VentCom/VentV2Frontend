<script setup lang="ts">
const isOpen = ref(false);

const toggleCollapsable = () => {
  isOpen.value = !isOpen.value;
};
</script>
<template>
  <div
    class="bg-dashboard-bg-darker rounded-xl border border-dashboard-card-border p-2"
  >
    <!-- card container -->
    <div class="gap-3 collapsable" :class="{ show: isOpen }">
      <div class="grid grid-cols-1 gap-3">
        <CustomerViewWalletAddressesCard
          v-for="card in 3"
        ></CustomerViewWalletAddressesCard>
      </div>

      <!-- collapsable content -->
      <div class="collapsable-content grid grid-cols-1 gap-3">
        <CustomerViewWalletAddressesCard
          v-for="card in 3"
        ></CustomerViewWalletAddressesCard>
      </div>
      <!-- collapsable content -->
    </div>
    <!-- card container -->

    <!-- collapse button -->
    <div class="flex justify-end items-center mt-3 w-full gap-2">
      <button
        @click="toggleCollapsable"
        class="border bg-white border-dashboard-card-border rounded-[8px] px-3 py-2.5 text-[13px] text-dashboard-text shrink-0 hover:border-brand-color-default hover:shadow-md hover:shadow-brand-color-010 cursor-pointer"
      >
        {{ isOpen ? "See less" : "See more" }}
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
