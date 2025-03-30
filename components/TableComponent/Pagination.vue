<template>
  <div class="flex justify-center md:justify-between md:items-center">
    <p class="text-base hidden md:inline text-dashboard-text-light">
      Showing - 1 to 8 of 235,000 Entries
    </p>

    <div class="flex gap-2">
      <button
        class="rounded-xl p-2 md:p-3 bg-brand-color-default text-white disabled:bg-gray-009 disabled:text-dashboard-text shrink-0"
      >
        <i class="w-5 h-5 block pb-5">
          <icon name="vent:arrow-left" size="1rem"></icon>
        </i>
      </button>

      <button
        v-for="(page, index) in 3"
        class="rounded-xl p-2 px-3.5 md:p-3 md:px-4.5 shrink-0 border border-dashboard-card-border hover:border-brand-color-default text-dashboard-heading text-sm"
      >
        {{ page }}
      </button>

      <button
        class="rounded-xl p-2 md:p-3 bg-brand-color-default text-white disabled:bg-gray-009 disabled:text-dashboard-text shrink-0"
      >
        <i class="w-5 h-5 block pb-5">
          <icon name="vent:arrow-right" size="1rem"></icon>
        </i>
      </button>
    </div>
  </div>
</template>
