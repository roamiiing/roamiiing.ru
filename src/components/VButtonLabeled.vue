<template>
  <!-- TODO: Somehow support this on mobile -->
  <VButton
    class="h-10 w-10 transition-all duration-500 overflow-hidden relative"
    @mouseenter="trigger = true"
    @mouseleave="trigger = false"
    :style="{
      width: trigger ? `${labelWidth}px` : null,
    }"
  >
    <i :class="`icon-${icon}`" v-show="!trigger"></i>
    <span
      class="text-base px-5"
      :class="{
        'absolute top-full left-full': !trigger,
      }"
      v-html="label"
      ref="labelElement"
    ></span>
  </VButton>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { REQUIRED_STRING } from '../misc/propsHelpers';

import VButton from './VButton.vue';

export default defineComponent({
  name: 'VButtonLabeled',
  components: {
    VButton,
  },
  props: {
    label: REQUIRED_STRING,
    icon: REQUIRED_STRING,
  },
  setup() {
    const trigger = ref(false);

    const labelElement = ref<HTMLElement | undefined>();
    const labelWidth = computed(() => labelElement.value?.clientWidth);

    return {
      trigger,
      labelElement,
      labelWidth,
    };
  },
});
</script>
