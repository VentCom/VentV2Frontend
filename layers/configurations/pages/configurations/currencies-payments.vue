<script lang="ts" setup>
definePageMeta({
  pageTransition: { name: "page-zoom", mode: "out-in" },
});
</script>
<template>
  <div>
    <!-- heading -->
    <div class="w-full mb-8">
      <h2 class="font-bold text-dashboard-heading mb-1 text-xl md:text-2xl">
        Currencies and Payments
      </h2>
      <p class="text-[0.813rem] text-dashboard-text">
        Configure the supported currencies and payment methods available on Vent
      </p>
    </div>
    <!-- heading end-->

    <div class="grid grid-cols-1 gap-8">
      <ConfigCPSettlementCurrencies></ConfigCPSettlementCurrencies>

      <ConfigCPPaymentGateways></ConfigCPPaymentGateways>
    </div>
  </div>
</template>
