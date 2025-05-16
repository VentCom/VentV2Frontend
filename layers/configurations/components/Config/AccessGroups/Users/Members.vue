<script setup lang="ts">
import { AppPills } from "#components";
</script>

<template>
  <table class="w-full text-xs md:text-sm">
    <thead>
      <tr class="text-dashboard-text font-bold bg-[#F8F9FC]">
        <th class="text-left px-4 py-4">Name</th>
        <th class="text-center px-4 py-4">Role</th>
        <th class="text-left px-4 py-4">Email</th>
        <th class="text-center px-4 py-4">Status</th>
        <th class="text-left px-4 py-4">Last Seen</th>
        <th class="flex justify-end px-4 py-4">More</th>
      </tr>

      <tr class="">
        <th colspan="6" class="py-1"></th>
      </tr>
    </thead>
    <tbody class="text-dashboard-text">
      <template v-for="(row, index) in 4" :key="index">
        <tr class="">
          <td
            class="border border-r-0 border-dashboard-card-border rounded-l-xl h-full p-4"
          >
            <ul class="flex items-center gap-1 text-dashboard-heading">
              <li
                class="w-7 h-7 uppercase font-semibold bg-brand-color-012 text-brand-color-001 text-[9px] flex items-center justify-center rounded-full"
              >
                SN
              </li>
              <li class="text-sm md:text-base text-dashboard-heading">
                <span class="whitespace-nowrap">Nkeze Sylvester</span>
              </li>
            </ul>
          </td>
          <td
            class="p-4 border-y border-dashboard-card-border text-center text-sm"
          >
            Compliance
          </td>
          <td class="p-4 border-y border-dashboard-card-border">
            <span class="whitespace-nowrap text-dashboard-text"
              >ex***mple@email.com</span
            >
          </td>
          <td
            class="p-4 border-y border-dashboard-card-border text-dashboard-text whitespace-nowrap"
          >
            <div class="flex justify-center w-full text-sm">
              <AppPills color="green">Active</AppPills>
            </div>
          </td>
          <td
            class="p-4 border-y border-dashboard-card-border whitespace-nowrap"
          >
            1 hour ago
          </td>
          <td
            class="p-4 border border-l-0 border-dashboard-card-border rounded-r-xl h-full"
          >
            <div class="flex justify-end">
              <AppDropdown :widthIsFinite="false" position="right">
                <template #default>
                  <button
                    class="text-dashboard-heading hover:text-brand-color-default cursor-pointer"
                  >
                    <icon name="vent:more" size="1.4rem"></icon>
                  </button>
                </template>

                <template #dropdown_body>
                  <ul
                    class="w-[265px] flex flex-col gap-2 p-3 border border-dashboard-card-divider"
                  >
                    <li class="w-full">
                      <button
                        class="border-b w-full border-dashboard-card-divider px-5 py-3 flex items-center gap-2 text-dashboard-heading hover:text-brand-color-default hover:border-brand-color-default"
                      >
                        <icon name="vent:edit-hollow" size="1.5rem"></icon>
                        <span class="text-base">Edit Role</span>
                      </button>
                    </li>
                    <li class="w-full">
                      <button
                        class="border-b w-full border-dashboard-card-divider text-[#FF5E00] px-5 py-3 flex items-center gap-2 cursor-pointer"
                      >
                        <icon name="vent:trash" size="1.5rem"></icon>
                        <span class="text-base">Delete Row</span>
                      </button>
                    </li>

                    <li class="w-full">
                      <button
                        class="w-full border-dashboard-card-divider px-5 py-3 flex items-center gap-2 text-[#FF5E00] cursor-pointer"
                      >
                        <icon
                          name="vent:info-circle-outlined"
                          size="1.5rem"
                        ></icon>
                        <span class="text-base">Revoke Permissions</span>
                      </button>
                    </li>
                  </ul>
                </template>
              </AppDropdown>
            </div>
          </td>
        </tr>
        <tr class="">
          <th colspan="6" class="py-1"></th>
        </tr>
      </template>
    </tbody>
  </table>
</template>
