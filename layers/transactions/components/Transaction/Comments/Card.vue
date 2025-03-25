<template>
  <ul>
    <li class="flex gap-3">
      <figure class="shrink-0">
        <img
          src="/img/user.jpeg"
          class="w-8 h-8 rounded-full object-center object-cover"
          alt=""
        />
      </figure>

      <!-- comment details -->
      <ul class="grow grid grid-cols-1 gap-2">
        <li
          class="p-4 bg-chat-bg rounded-xl rounded-tl-none text-dashboard-heading text-xs md:text-base"
        >
          This is a sample text representing the comment entered by an admin
        </li>
        <li
          class="flex items-center gap-2 text-dashboard-text text-[0.55rem] md:text-[0.813rem] flex-wrap"
        >
          <span class="whitespace-nowrap">Gift Dappa</span>
          <span
            class="block w-2 aspect-square rounded-full bg-dashboard-text-light shrink-0"
          ></span>
          <span class="whitespace-nowrap"> March 22, 2025 02:23AM</span>
        </li>
      </ul>
      <!-- comment details end-->
    </li>
  </ul>
</template>
