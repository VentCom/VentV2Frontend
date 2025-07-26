<script setup>
const isOpen = ref(false);

const toggleVisibility = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div
    class="border border-dashboard-card-border bg-white hover:bg-brand-color-default/10 hover:border-brand-color-default rounded-[8px] p-6 collapsable"
    :class="{ show: isOpen }"
  >
    <div
      class="flex items-center justify-between cursor-pointer"
      @click="toggleVisibility"
    >
      <h1 class="text-black">Silverman M4 Pro</h1>

      <div class="text-[12px] inline-block">
        <AppPills color="blue">Currently Active</AppPills>
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-x-7.5 gap-y-5 collapsable-content"
    >
      <div>
        <h3 class="text-dashboard-text text-[8px] uppercase mb-1.5">
          OPERATING SYSTEM
        </h3>
        <p class="text-dashboard-heading text-[13px]">MacOS M4 Chip</p>
      </div>

      <div>
        <h3 class="text-dashboard-text text-[8px] uppercase mb-1.5">browser</h3>
        <p class="text-dashboard-heading text-[13px]">Chrome 18.2.5.1</p>
      </div>

      <div>
        <h3 class="text-dashboard-text text-[8px] uppercase mb-1.5">
          IP Address
        </h3>
        <p class="text-dashboard-heading text-[13px]">10.901.64.1</p>
      </div>

      <div>
        <h3 class="text-dashboard-text text-[8px] uppercase mb-1.5">
          Location
        </h3>
        <p class="text-dashboard-heading text-[13px]">
          Asaba, Delta State, Nigeria
        </p>
      </div>

      <div class="md:col-span-2">
        <h3 class="text-dashboard-text text-[8px] uppercase mb-1.5">
          Last login
        </h3>
        <p class="text-dashboard-heading text-[13px]">
          Wednesday, 25th June, 2025 5:34 PM
        </p>
      </div>

      <div class="md:col-span-2">
        <h3 class="text-dashboard-text text-[8px] uppercase mb-1.5">
          Last Seen
        </h3>
        <p class="text-dashboard-heading text-[13px]">
          Wednesday, 25th June, 2025 7:34 PM
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.collapsable {
  display: grid;
  grid-template-rows: auto 0fr;
  grid-template-columns: 1fr;
  transition: all 0.3s ease;
  overflow: hidden;
}

.collapsable.show {
  grid-template-rows: auto 1fr !important;
  gap: 24px;
}

.collapsable-content {
  overflow: hidden;
}
</style>
