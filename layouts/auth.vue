<template>
  <div
    class="w-full min-h-screen flex items-end justify-center relative overflow-hidden p-5 pb-0 font-body"
  >
    <img
      src="/img/auth_bg.svg"
      alt="auth bg"
      class="absolute top-0 left-0 w-full h-full object-cover z-[1] auth-bg"
    />
    <slot />
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.auth-bg {
  transform: scale(1.8);
  animation: scale 10s ease-in-out 1 forwards;
}

@keyframes scale {
  0% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
