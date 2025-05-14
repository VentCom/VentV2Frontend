<script setup lang="ts">
import { AppRadio } from "#components";
const payload = reactive({
  format: "csv",
});
</script>

<template>
  <div class="border border-dashboard-card-border">
    <div
      class="p-5 md:p-10 flex flex-col md:flex-row gap-5 items-start justify-between"
    >
      <div class="w-full md:w-[358px]">
        <h2 class="text-dashboard-heading font-semibold text-xl pb-2">
          Session Logs
        </h2>
        <p class="text-xs md:text-base text-dashboard-text">
          Download your team’s activity up to the last 3 months
        </p>
      </div>

      <div class="w-full md:w-[300px] grid grid-cols-1 gap-4">
        <div
          class="border border-dashboard-card-border px-5 py-4 flex w-full gap-4 text-dashboard-heading"
        >
          <Icon name="vent:calendar-edit" size="1.3rem"></Icon>
          <p class="text-sm md:text-base">Feb 6, 4:19PM - May 6, 4:19PM</p>
        </div>
        <div
          class="flex gap-3 items-center text-[0.81rem] text-dashboard-heading"
        >
          <label>Download Format</label>
          <ul class="flex items-center gap-3">
            <li class="flex items-center gap-1">
              <AppRadio
                v-model="payload.format"
                id="pdf_format"
                value="pdf"
                name="doc_format"
              ></AppRadio>
              <label
                for="pdf_format"
                class="text-[0.81rem] text-dashboard-heading"
                >PDF</label
              >
            </li>
            <li class="flex items-center gap-1">
              <AppRadio
                v-model="payload.format"
                id="csv_format"
                value="csv"
                name="doc_format"
              ></AppRadio>
              <label
                for="csv_format"
                class="text-[0.81rem] text-dashboard-heading"
                >CSF</label
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <ul
      class="flex justify-between items-center bg-[#FAFAFA] border-t border-dashboard-card-border"
    >
      <li
        class="p-6 md:p-10 md:py-5.5 block text-[0.81rem] text-dashboard-text"
      >
        The activities log helps maintain operational integrity and
        accountability
      </li>

      <li class="p-3 shrink-0">
        <AppButton size="sm" :outlined="true" rounded :block="false"
          >Download</AppButton
        >
      </li>
    </ul>
  </div>
</template>
