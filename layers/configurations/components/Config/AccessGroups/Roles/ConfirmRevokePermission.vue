<template>
  <div class="grid grid-cols-1 gap-10">
    <h1 class="text-modal-heading font-heading text-3xl md:text-4xl mb-1">
      Revoke Permission
    </h1>
    <div>
      <h4 class="text-lg md:text-base text-modal-subheading mb-2">
        Are you sure you want to revoke this permission?
      </h4>
      <p class="text-dashboard-text text-sm">
        This action will immediately remove access to related features. Changes
        may affect the user’s ability to perform certain tasks.
      </p>
    </div>

    <div class="flex gap-3 items-center">
      <AppButton size="sm" color="neutral" :block="false">Cancel</AppButton>
      <AppButton size="sm" :block="false">Revoke Access</AppButton>
    </div>
  </div>
</template>
