<template>
  <div class="grid grid-cols-1 gap-10">
    <div>
      <h1 class="text-modal-heading font-heading text-3xl md:text-4xl mb-1">
        Invite Users
      </h1>
      <p class="text-sm md:text-base text-modal-subheading">
        Bring your team on board by sending invites and setting their roles.
      </p>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-2 text-xl text-dashboard-heading">
        User’s Details
      </div>

      <div class="col-span-2">
        <AppInputContainer label="Name (First Name, Last Name)">
          <input type="text" placeholder="Enter name" />
        </AppInputContainer>
      </div>

      <div>
        <AppInputContainer label="Email Address">
          <input type="email" placeholder="example@vent.africa" />
        </AppInputContainer>
      </div>

      <div>
        <AppInputContainer label="Add Restriction">
          <div class="flex items-center justify-between w-full">
            <span class="text-input-placeholder">Select role</span>

            <Icon name="vent:arrow-down" size="1.3rem"></Icon>
          </div>
        </AppInputContainer>
      </div>
    </div>

    <div class="flex gap-3 items-center">
      <AppButton size="sm" color="neutral" :block="false">Cancel</AppButton>
      <AppButton size="sm" :block="false">Send Invite</AppButton>
    </div>
  </div>
</template>
