<script lang="ts" setup>
import { LinkList, LinkType } from "~/utils/data/SidebarLinks";

const linkWrapper = LinkList;

const { minimizeSideBar } = useSidebarHandler();
</script>
<template>
  <div class="flex-grow h-full overflow-y-auto">
    <div class="h-full overflow-y-scroll p-8">
      <ul
        class="flex flex-col w-full text-dashboard-sidebar-text mb-8"
        :class="{
          'md:mb-0': minimizeSideBar,
          'md:mb-8': !minimizeSideBar,
        }"
        v-for="(linkGroup, index) in linkWrapper"
        :key="index"
      >
        <template v-for="(link, index) in linkGroup" :key="index">
          <li
            v-if="link.type === LinkType.HEADING"
            class="mb-4 text-[0.5rem] uppercase tracking-widest whitespace-nowrap"
            :class="{
              'md:hidden': minimizeSideBar,
            }"
          >
            {{ link.name }}
          </li>
          <li v-else>
            <NuxtLink
              :to="link.route"
              class="sidebar-link group"
              active-class="active"
            >
              <!-- tooltip -->
              <!-- <span
                class="absolute left-[102%] bg-dashboard-bg border border-dashboard-card-border rounded-lg py-2 px-4 text-sm font-bold z-50 hidden group-hover:inline-block"
              >
                {{ link.name }}
              </span> -->
              <!-- tooltip end -->

              <span class="block w-5 aspect-square">
                <Icon :name="link.icon || ''" size="1.2rem"></Icon>
              </span>
              <span
                class="mb-1 whitespace-nowrap"
                :class="{
                  'md:hidden': minimizeSideBar,
                }"
              >
                {{ link.name }}
              </span>
            </NuxtLink>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<style scoped>
@reference "~/assets/css/main.css";

.sidebar-link {
  @apply p-3.5 flex w-full items-center capitalize gap-2 relative z-2 font-bold text-sm;
  @apply transition duration-500 ease-in-out;
  overflow: visible;
}

.sidebar-link::after {
  content: "";
  @apply absolute top-0 left-0 z-1 bg-gradient-to-r from-40% from-brand-color-default/10 to-brand-color-default/20 border-r-2 border-transparent w-0 h-full;
  @apply transition-all duration-500 ease-in-out;
}

.sidebar-link:hover,
.sidebar-link.active {
  @apply text-brand-color-default;
}

.sidebar-link:hover:after,
.sidebar-link.active:after {
  @apply w-full border-brand-color-default;
}
</style>
