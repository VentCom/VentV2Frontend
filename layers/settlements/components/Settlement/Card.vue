<script setup lang="ts"></script>

<template>
  <!-- single settlement -->
  <div class="">
    <!-- details -->
    <ul
      class="w-full grid grid-cols-2 md:grid-cols-4 gap-5 gap-y-8 md:pt-0 md:shrink-0 collapsible-content"
    >
      <li>
        <p
          class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
        >
          Amount
        </p>
        <p class="flex items-center gap-1">NGN3,000,320.62</p>
      </li>

      <li>
        <p
          class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
        >
          Beneficiary Bank
        </p>
        <p class="flex items-center gap-1">Guaranty Trust Bank</p>
      </li>

      <li>
        <p
          class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
        >
          Account Number
        </p>
        <p class="flex items-center gap-1">0011223344</p>
      </li>

      <li>
        <p
          class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
        >
          Account Name
        </p>
        <p class="flex items-center gap-1">Johnny Doe Young</p>
      </li>

      <li>
        <p
          class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
        >
          Payment Gateway
        </p>
        <p class="flex items-center gap-1">Glyde</p>
      </li>

      <li>
        <p
          class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
        >
          Settled by
        </p>
        <p class="flex items-center gap-1">Peremobowei Agiddi</p>
      </li>

      <li>
        <p
          class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
        >
          Time paid
        </p>
        Mar 18, 2025 1:42PM
      </li>

      <li>
        <p
          class="text-[0.6rem] uppercase tracking-widest text-dropdown-heading mb-2"
        >
          Status
        </p>
        <AppPills color="green">Completed</AppPills>
      </li>
    </ul>
    <!-- details end-->
  </div>
  <!-- single settlement end-->
</template>
