<script setup lang="ts">
import {
  AppBreadcrumb,
  TransactionInformation,
  TransactionUserData,
} from "#components";
import type { BreadcrumbData } from "~/utils/types/misc/BreadcrumbData";

definePageMeta({
  layout: "dashboard",
  pageTransition: { name: "page-zoom", mode: "out-in" },
});

const breadcrumbList: BreadcrumbData[] = [
  {
    name: "Transactions",
    route: "/transactions",
  },
  {
    name: "Transaction Details",
    route: "/",
  },
];
</script>
<template>
  <div class="w-full flex flex-col gap-7 text-dashboard-heading">
    <!-- breadcrumb -->
    <AppBreadcrumb :list="breadcrumbList"></AppBreadcrumb>
    <!-- breadcrumb end-->

    <!-- transactor biodata -->
    <TransactionUserData></TransactionUserData>
    <!-- transactor biodata -->

    <!--transaction data tabs -->
    <TransactionInformation></TransactionInformation>
    <!--transaction data tabs end-->
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.divider-horizontal {
  @apply bg-dashboard-card-border w-full h-0.5;
  border-radius: 100%;
}

.divider-vertical {
  @apply bg-dashboard-card-border h-5 w-0.5 mb-3;
  border-radius: 100%;
}
</style>
