<script setup lang="ts">
import { AppCheckbox } from "#components";

const props = withDefaults(
  defineProps<{
    title: string;
    description: string;
    permissions: {
      id: string;
      title: string;
    }[];
  }>(),
  {
    title: "",
    description: "",
    permissions: () => [],
  }
);

const selectAllId = (Math.random() * 1000).toString();

const selectAllStatus = ref(false);

const selectedPermissions = ref<string[]>([]);

watch(selectAllStatus, (newValue) => {
  if (newValue === true) {
    selectedPermissions.value = props.permissions.map((item) => item.title);
  } else {
    selectedPermissions.value = [];
  }
});
</script>
<template>
  <div class="border border-dashboard-card-border">
    <div
      class="p-5 md:p-10 flex flex-col md:flex-row gap-5 items-start justify-between"
    >
      <div class="w-full md:w-[358px]">
        <h2 class="text-dashboard-heading font-semibold text-base pb-2">
          {{ props.title }}
        </h2>
        <p class="text-xs md:text-base text-dashboard-text">
          {{ props.description }}
        </p>
      </div>

      <div class="w-full md:w-1/2 grid grid-cols-1 gap-4">
        <ul class="grid grid-cols-1 w-full gap-5">
          <li class="flex gap-3">
            <AppCheckbox
              name="permissions_group"
              v-model:isSelected="selectAllStatus"
              :id="selectAllId"
            ></AppCheckbox>
            <label :for="selectAllId" class="text-dashboard-text text-sm">
              Select all</label
            >
          </li>
          <li
            v-for="(permission, index) in props.permissions"
            :key="index"
            class="flex gap-3"
          >
            <AppCheckbox
              name="permissions_group"
              v-model:isSelected="selectedPermissions"
              :value="permission.title"
              :id="permission.id"
            ></AppCheckbox>
            <label :for="permission.id" class="text-dashboard-text text-sm">
              {{ permission.title }}</label
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
