<script setup lang="ts">
const links = ref([
  {
    name: "Wallets",
    route: "/wallets",
  },
  {
    name: "Transaction Records",
    route: "/wallets/[user_uid]",
  },
]);
</script>
<template>
  <div class="w-full flex flex-col gap-5">
    <div class="w-full">
      <AppBreadcrumb :list="links"></AppBreadcrumb>
    </div>

    <div class="w-full">
      <WalletSingleWalletOverview></WalletSingleWalletOverview>
    </div>

    <div class="w-full">
      <WalletSingleWalletTransactions></WalletSingleWalletTransactions>
    </div>
  </div>
</template>
