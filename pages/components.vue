<template>
  <div class="max-w-2xl mx-auto grid grid-cols-1 gap-11">
    <div>
      <AppInputContainer label="First Name">
        <input type="text" />
      </AppInputContainer>
    </div>
    <div>
      <AppInputContainer label="First Name" :isPassword="true">
        <template v-slot="props">
          <input
            :type="props.passwordIsVisible ? 'text' : 'password'"
            placeholder="Password"
          />
        </template>
      </AppInputContainer>
    </div>
  </div>
</template>
