<template>
  <div v-if="!htmlButton" :class="classBind">
    <slot></slot>
  </div>
  <button v-else :class="classBind">
    <VLoader v-if="loading" />
    <slot v-else></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, toRefs } from 'vue';
import VLoader from './VLoader.vue';

const props = defineProps({
  htmlButton: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const { disabled } = toRefs(props);

const classBind = computed(() => ({
  'pointer-events-none opacity-50': disabled.value,
}));
</script>

<style scoped>
div, button {
  @apply cursor-pointer flex items-center
  justify-center rounded-full border-2 border-gray-400 text-gray-400
  hover:border-white hover:text-white transition-all duration-300 select-none
  outline-none focus:outline-none;
}
</style>
