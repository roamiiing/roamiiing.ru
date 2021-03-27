<template>
  <div v-if="!htmlButton" :class="classBind">
    <slot></slot>
  </div>
  <button v-else :class="classBind">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue';

export default defineComponent({
  name: 'VButton',
  props: {
    htmlButton: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { disabled } = toRefs(props);

    const classBind = computed(() => ({
      'pointer-events-none opacity-50': disabled.value,
    }));

    return {
      classBind,
    };
  },
});
</script>

<style scoped>
div, button {
  @apply cursor-pointer flex items-center
  justify-center rounded-full border-2 border-gray-400 text-gray-400
  hover:border-white hover:text-white transition-all duration-300 select-none
  outline-none focus:outline-none;
}
</style>
