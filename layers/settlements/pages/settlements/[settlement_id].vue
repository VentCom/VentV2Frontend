<script setup lang="ts">
import { AppBreadcrumb } from "#components";
import type { BreadcrumbData } from "~/utils/types/misc/BreadcrumbData";

definePageMeta({
  layout: "dashboard",
  pageTransition: { name: "page-zoom", mode: "out-in" },
});

const breadcrumbList: BreadcrumbData[] = [
  {
    name: "Settlements",
    route: "/settlements/",
  },
  {
    name: "Settlement Details",
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

    <!-- Settlement details -->
    <SettlementInformation></SettlementInformation>
    <!-- Settlement details -->
  </div>
</template>
