<script setup lang="ts">
const props = withDefaults(defineProps<{ title?: string }>(), {
  title: "",
});

const isOpen = ref(false);

const toggleCollapsable = () => {
  isOpen.value = !isOpen.value;
};

const { singleCustomerView } = useCustomerConfig();

const showCardDetail = computed(() => {
  if (singleCustomerView.value === CustomerView.MINIMAL) return true;
  return isOpen.value;
});
</script>
<template>
  <div
    class="p-4 md:p-6 border-dashboard-card-border border rounded-[12px] collapsable"
    :class="{ show: showCardDetail }"
  >
    <div class="flex justify-between items-center w-full">
      <div class="flex items-center gap-2">
        <h2 class="font-semibold text-dashboard-heading-blue capitalize">
          {{ props.title }}
        </h2>
      </div>
      <div>
        <button
          v-if="singleCustomerView === CustomerView.FULL"
          class="text-dashboard-text hover:text-brand-color-default cursor-pointer w-[28px] h-[28px] border border-dashboard-card-border hover:border-brand-color-default rounded-[6px] flex items-center justify-center"
          @click="toggleCollapsable"
        >
          <span
            class="flex items-center transition duration-200 ease-linear origin-center"
            :class="{ 'rotate-180': isOpen }"
          >
            <Icon name="vent:arrow-down" size="1rem"></Icon>
          </span>
        </button>
      </div>
    </div>

    <div class="collapsable-content">
      <slot></slot>
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
  gap: 16px;
}

.collapsable-content {
  overflow: hidden;
}
</style>
