<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
    <CustomerListSingleUserBankDetailsCards
      v-for="card in 4"
    ></CustomerListSingleUserBankDetailsCards>
  </div>
</template>
