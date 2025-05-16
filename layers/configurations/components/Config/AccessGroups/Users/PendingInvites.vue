<script setup lang="ts"></script>

<template>
  <table class="w-full text-xs md:text-sm">
    <tbody class="text-dashboard-text">
      <template v-for="(row, index) in 4" :key="index">
        <tr class="">
          <td
            class="border border-r-0 border-dashboard-card-border rounded-l-xl h-full p-4"
          >
            <ul class="flex items-center gap-1 text-dashboard-heading">
              <li class="w-7 h-7 block">
                <img src="/img/role-icon.svg" class="w-full" alt="role" />
              </li>
              <li class="text-sm md:text-base">
                <span class="whitespace-nowrap">Donald Blessing</span>
              </li>
            </ul>
          </td>

          <td class="p-4 border-y border-dashboard-card-border">
            <span class="whitespace-nowrap text-dashboard-text"
              >ex***mple@email.com</span
            >
          </td>

          <td
            class="p-4 border border-l-0 border-dashboard-card-border rounded-r-xl h-full"
          >
            <div class="flex justify-end">
              <button class="cursor-pointer text-orange-default">
                <icon name="vent:close-circle" size="1.6rem"></icon>
              </button>
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
