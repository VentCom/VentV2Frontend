<template>
  <div class="flex w-full gap-4 flex-col">
    <AdminListSingleUserSessionLogsFilters />

    <div
      class="border border-dashboard-card-border bg-white rounded-[8px] p-6 flex flex-col gap-4 w-full"
    >
      <div class="text-center text-dashboard-text-light text-[13px] w-full">
        Today
      </div>

      <div class="flex flex-col w-full">
        <AdminListSingleUserSessionLogsCard type="logged-out" />
        <AdminListSingleUserSessionLogsCard type="logged-in" isLast>
          <h2 class="text-dashboard-text text-[13px]">
            <span class="text-dashboard-heading-blue font-semibold">
              Silverman MacBook Pro,
            </span>
            accessed users’ account from
            <span class="text-dashboard-heading-blue font-semibold">
              Asaba, Nigeria
            </span>
            with an IP
            <span class="text-dashboard-heading-blue font-semibold">
              10.901.64.1
            </span>
          </h2>
        </AdminListSingleUserSessionLogsCard>
      </div>
    </div>
  </div>
</template>
