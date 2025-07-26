<script setup lang="ts">
const isOpen = ref(false);

const toggleCollapsable = () => {
  isOpen.value = !isOpen.value;
};

const list = ref([
  {
    heading: "today’s Total",
    hours: 10,
    minutes: 2,
    seconds: 20,
    level: 2,
  },
  {
    heading: "This Week’s Total",
    hours: 10,
    minutes: 2,
    seconds: 20,
    level: 2,
  },
  {
    heading: "This Month’s Total",
    hours: 10,
    minutes: 2,
    seconds: 20,
    level: 3,
  },
  {
    heading: "This Year’s Total",
    hours: 10,
    minutes: 2,
    seconds: 20,
    level: 3,
  },
  {
    heading: "All Time Total",
    data: "41124H:04M:21S",
    hours: 10,
    minutes: 2,
    seconds: 20,
    level: 3,
  },
]);

const summary = computed(() => {
  return list.value.filter((item, index) => index <= 2);
});

const remaining = computed(() => {
  return list.value.filter((item, index) => index > 2);
});
</script>

<template>
  <div class="mb-3.5">
    <h1 class="text-dashboard-heading text-[20px] font-semibold pb-4">
      Worktime Summary
    </h1>
  </div>

  <div
    class="border p-2 rounded-xl bg-dashboard-bg-darker border-dashboard-card-border"
    :class="{ 'gap-1 show': isOpen, 'gap-0': !isOpen }"
  >
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
      <AdminListSingleUserWorktimeSummaryCard
        v-for="(workTime, index) in list"
        :key="index"
        :heading="workTime.heading"
        :hours="workTime.hours"
        :minutes="workTime.minutes"
        :seconds="workTime.seconds"
        :level="workTime.level"
      />
    </div>
  </div>

  <!-- collapse button -->
  <!-- <div class="flex justify-between items-center mt-3.5 w-full gap-2">
    <button
      @click="toggleCollapsable"
      class="border border-dashboard-card-border rounded-[8px] px-3 py-2.5 text-[13px] text-dashboard-text shrink-0 hover:border-brand-color-default hover:shadow-md hover:shadow-brand-color-010 cursor-pointer"
    >
      {{ isOpen ? "See Less" : "See More" }}
    </button>
  </div> -->
  <!-- collapse button end-->
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
