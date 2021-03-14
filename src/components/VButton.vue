<template>
  <div
    class="
      h-8
      cursor-pointer
      flex
      items-center
      justify-center
      rounded-full
      border-2
      border-gray-500
      text-gray-500
      hover:border-white
      hover:text-white
      transition-all
      duration-300
      select-none
    "
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VButton',
});
</script>
