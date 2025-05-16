<template>
  <table class="w-full text-xs md:text-sm">
    <thead>
      <tr class="text-dashboard-text font-bold bg-[#F8F9FC]">
        <th class="text-left px-4 py-4">Name</th>
        <th class="text-left px-4 py-4">Email Address</th>
        <th class="text-left px-4 py-4">Last Seen</th>
        <th class="text-center px-4 py-4">More</th>
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
            class="p-4 border-y border-dashboard-card-border text-left text-sm"
          >
            <span class="whitespace-nowrap text-dashboard-text"
              >ex***mple@email.com</span
            >
          </td>
          <td class="p-4 border-y border-dashboard-card-border">
            <span class="whitespace-nowrap text-dashboard-text"
              >1 hour ago</span
            >
          </td>

          <td
            class="p-4 border border-l-0 border-dashboard-card-border rounded-r-xl h-full"
          >
            <div class="flex justify-center">
              <button class="cursor-pointer text-orange-default">
                <icon name="vent:trash-square" size="2.2rem"></icon>
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
