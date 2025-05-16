<template>
  <div class="grid grid-cols-1 gap-10">
    <h1 class="text-modal-heading font-heading text-3xl md:text-4xl mb-1">
      Delete Role
    </h1>
    <div>
      <h4 class="text-lg md:text-base text-modal-subheading mb-2">
        Are you sure you want to delete this role?
      </h4>
      <p class="text-dashboard-text text-sm">
        This will permanently remove the role and revoke its permissions from
        all assigned users. This action cannot be undone.
      </p>
    </div>

    <div class="flex gap-3 items-center">
      <AppButton size="sm" color="neutral" :block="false">Cancel</AppButton>
      <AppButton size="sm" :block="false">Delete Row</AppButton>
    </div>
  </div>
</template>
