<script setup lang="ts">
const { singleCustomerView } = useCustomerConfig();
</script>
<template>
  <div
    class="flex gap-6 max-w-[1488px] w-full mx-auto items-start"
    :class="{
      'flex-col md:flex-row': singleCustomerView === CustomerView.FULL,
      'flex-col': singleCustomerView === CustomerView.MINIMAL,
    }"
  >
    <!-- full view body -->
    <div
      class="gap-6 w-full"
      :class="{
        'flex flex-col': singleCustomerView === CustomerView.FULL,
        hidden: singleCustomerView === CustomerView.MINIMAL,
      }"
    >
      <slot name="full-view"></slot>
    </div>
    <!-- full view body end -->

    <!-- side view body -->
    <div
      class="flex flex-col gap-6 md:sticky md:top-0"
      :class="{
        'w-full md:w-[620px]': singleCustomerView === CustomerView.FULL,
        'w-full': singleCustomerView === CustomerView.MINIMAL,
      }"
    >
      <slot
        v-if="singleCustomerView === CustomerView.MINIMAL"
        name="mini-view-only"
      ></slot>

      <slot name="mini-view"></slot>
    </div>
    <!-- side view body end-->
  </div>
</template>
