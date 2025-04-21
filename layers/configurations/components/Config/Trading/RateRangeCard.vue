<template>
  <AppCollapsableCard>
    <template #header-left>
      <ul class="flex items-center gap-2">
        <li>
          <h3
            class="text-dashboard-heading font-semibold text-sm md:text-base pl-2"
          >
            USDT (TRC20)
          </h3>
        </li>
        <li
          class="border px-2 py-1 border-dashboard-card-border text-xs text-dashboard-text rounded-lg"
        >
          1
        </li>
      </ul>
    </template>

    <template #header-right="props">
      <Dropdown v-if="props.isOpen" :position="'right'">
        <button
          class="bg-white rounded-full border py-2 px-3 gap-2 flex items-center border-dashboard-card-border"
        >
          <span class="text-[0.81rem] text-dashboard-text">Filter by</span>
          <span
            class="inline-block border-r-2 border-dashboard-card-border h-[8px]"
          ></span>
          <span class="text-dashboard-heading inline-block mr-4 text-[0.81rem]"
            >All</span
          >
          <icon
            name="vent:arrow-down"
            size="1rem"
            class="text-dashboard-heading"
          ></icon>
        </button>
      </Dropdown>
    </template>

    <template #header-right-post-btn="props">
      <span
        v-if="props.isOpen"
        class="inline-block border-r-2 border-dashboard-card-border h-[12px]"
      ></span>

      <AppButton v-if="props.isOpen" rounded outlined size="sm">Add</AppButton>
    </template>

    <template #body>
      <table class="w-full text-xs md:text-sm">
        <thead>
          <tr class="text-dashbard-heading font-bold">
            <th class="text-left px-4 pb-4">Min</th>
            <th class="text-left px-4 pb-4">Max</th>
            <th class="text-left px-4 pb-4">Currency</th>
            <th class="text-left px-4 pb-4">Amount</th>
            <th class="flex justify-end px-4 pb-4">
              <icon name="vent-more" size="1.4rem"></icon>
            </th>
          </tr>
        </thead>
        <tbody class="text-dashboard-text">
          <template v-for="(row, index) in 4" :key="index">
            <tr class="">
              <td
                class="border border-r-0 border-dashboard-card-border rounded-l-xl h-full p-4"
              >
                $50
              </td>
              <td class="p-4 border-y border-dashboard-card-border">$101</td>
              <td class="p-4 border-y border-dashboard-card-border">NGN</td>
              <td class="p-4 border-y border-dashboard-card-border">1620</td>
              <td
                class="p-4 border border-l-0 border-dashboard-card-border rounded-r-xl h-full"
              >
                <div class="flex justify-end">
                  <button
                    class="flex w-8 h-8 items-center justify-center rounded-full border border-brand-color-007 text-brand-color-default bg-dashboard-bg"
                  >
                    <icon size="1rem" name="vent:edit-2"></icon>
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
  </AppCollapsableCard>
</template>
