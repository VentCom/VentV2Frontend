<template>
  <div>
    <TableComponentHeader
      tableName="All transactions"
      searchText="transactions"
    >
      <button
        class="shrink-0 p-2 flex gap-2 cursor-pointer border-dashboard-card-border items-center rounded-full justify-center border text-dashboard-heading group text-xs hover:border-brand-color-default ml-auto"
      >
        <i
          class="text-dashboard-heading w-5.5 h-5.5 bg-dashboard-bg-dark rounded-full flex items-center justify-center shrink-0 aspect-square"
        >
          <Icon name="vent:close" size="0.6rem"></Icon>
        </i>
        <span class="block mr-2"> Cryptocurrency </span>
      </button>
    </TableComponentHeader>
  </div>
</template>
