<template>
  <div class="grid grid-cols-1 md:flex md:flex-row items-start gap-6">
    <ConfigSidebar></ConfigSidebar>
    <ConfigBody>
      <slot></slot>
    </ConfigBody>
  </div>
</template>
