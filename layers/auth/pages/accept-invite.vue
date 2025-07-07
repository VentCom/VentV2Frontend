<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "zoom",
    mode: "out-in",
  },
});

const goToNewPassword = () => {
  navigateTo("/create-password");
};
</script>
<template>
  <section
    class="w-full min-h-svh flex justify-center items-center bg-[url('/img/cloud_bg.png')] bg-cover bg-no-repeat px-5 py-7 bg-center"
  >
    <div
      class="bg-dashboard-bg rounded-3xl flex flex-col items-center gap-10 border-[6px] border-[#EDF3FF] py-22 px-6 md:px-22 max-w-[697px]"
    >
      <img src="/img/logo.svg" class="w-[87px]" alt="logo" />

      <div class="w-full flex flex-col items-center gap-2">
        <h1
          class="text-auth-heading font-heading text-3xl text-center md:text-[54px] leading-[100%]"
        >
          You’ve Been Invited to Join Vent’s Workforce
        </h1>

        <p class="text-sm md:text-base text-auth-subheading text-center">
          You’re just one step away from joining the Vent Africa team. Accept
          your invite and get started!
        </p>
      </div>

      <div
        class="w-full flex flex-col items-center mx-auto max-w-[347px] gap-6"
      >
        <AppButton @click="goToNewPassword" block>Accept Invite</AppButton>

        <div
          class="flex items-center gap-2 justify-center text-sm text-dashboard-text"
        >
          Having issues?
          <a href="#" class="text-dashboard-heading hover:text-brand-color-007"
            >Contact Support</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
