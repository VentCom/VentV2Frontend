<script setup lang="ts">
const { singleCustomerView } = useCustomerConfig();

const isOpen = ref(false);

const toggleCollapsable = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div
    class="bg-dashboard-bg-darker rounded-xl border border-dashboard-card-border p-2"
  >
    <div
      class="grid grid-cols-1 gap-3"
      :class="{ collapsable: CustomerView.MINIMAL, show: isOpen }"
    >
      <div
        :class="{
          'grid grid-cols-1 md:grid-cols-2 gap-3':
            singleCustomerView === CustomerView.MINIMAL,
          'grid grid-cols-1 gap-3': singleCustomerView === CustomerView.FULL,
        }"
      >
        <CustomerViewBankDetailsCards
          v-for="card in 2"
        ></CustomerViewBankDetailsCards>
      </div>

      <div
        :class="{
          'grid grid-cols-1 md:grid-cols-2 gap-3 collapsable-content':
            singleCustomerView === CustomerView.MINIMAL,
          'grid grid-cols-1 gap-3': singleCustomerView === CustomerView.FULL,
        }"
      >
        <CustomerViewBankDetailsCards
          v-for="card in 2"
        ></CustomerViewBankDetailsCards>
      </div>
    </div>

    <div
      v-if="singleCustomerView === CustomerView.MINIMAL"
      class="flex justify-end items-center mt-3"
    >
      <button
        @click="toggleCollapsable"
        class="border border-dashboard-card-border rounded-[8px] px-3 py-2.5 text-[13px] text-dashboard-text shrink-0 hover:border-brand-color-default hover:shadow-md hover:shadow-brand-color-010 cursor-pointer bg-white"
      >
        {{ isOpen ? "See less" : "See more" }}
      </button>
    </div>
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
  @apply gap-3;
}

.collapsable-content {
  overflow: hidden;
}
</style>
