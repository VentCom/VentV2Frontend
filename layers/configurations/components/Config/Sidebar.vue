<script setup lang="ts">
const searchValue = ref("");

const links = ref([
  {
    name: "General",
    route: "/configurations",
  },
  {
    name: "Trading",
    route: "/configurations/trading",
  },
  {
    name: "One-Time Passwords",
    route: "/configurations/otp",
  },
  {
    name: "Currencies and Payments",
    route: "/configurations/currencies-payments",
  },
  {
    name: "Access Groups",
    route: "/configurations/access-groups",
  },
  {
    name: "Security & Privacy",
    route: "/configurations/security-privacy",
  },
]);

const sidebarLinks = computed(() => {
  return links.value.filter((link) => {
    return link.name.toLowerCase().includes(searchValue.value.toLowerCase());
  });
});
</script>

<template>
  <div
    class="w-full md:w-[218px] shrink-0 grid grid-cols-1 gap-3 md:sticky top-30"
  >
    <h1
      class="text-[0.5rem] uppercase tracking-widest whitespace-nowrap pb-4 border-b border-dashboard-card-border"
    >
      System configuration
    </h1>

    <div class="relative">
      <Icon
        name="vent:search-normal"
        size="1rem"
        class="absolute text-dashboard-text-light left-3 top-1/2 -translate-y-1/2"
      ></Icon>
      <input
        type="text"
        v-model="searchValue"
        placeholder="Search configurations"
        class="border w-full outline-none border-dashboard-card-border hover:border-brand-color-007 text-[0.813rem] focus:border-brand-color-007 placeholder:text-dashboard-text-light p-3 pl-9"
      />
    </div>

    <!-- link list -->
    <ul class="w-full grid grid-cols-1">
      <li>
        <nuxt-link
          v-for="(link, index) in sidebarLinks"
          :key="index"
          :to="link.route"
          class="block p-4 text-[0.81rem] text-dashboard-heading hover:bg-team transition duration-300 ease-in-out border-t border-dashboard-card-divider"
          exact-active-class="bg-team"
          >{{ link.name }}</nuxt-link
        >
      </li>
    </ul>
    <!-- link list end -->
  </div>
</template>
