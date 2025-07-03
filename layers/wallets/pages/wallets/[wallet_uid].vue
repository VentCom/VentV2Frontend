<script setup lang="ts">
const links = ref([
  {
    name: "Wallets Database",
    route: "/wallets",
  },
  {
    name: "USDT",
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
      <WalletSingleWalletNetworkWallets></WalletSingleWalletNetworkWallets>
    </div>
  </div>
</template>
