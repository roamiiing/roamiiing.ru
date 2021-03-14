<template>
  <header
    class="
      fixed z-50 top-0 left-0 w-full h-18 p-4
      bg-blackout duration-500
      flex flex-row justify-between text-xl
    "
  >
    <LanguageSelector />
    <a href="mailto:roamiiing@roamiiing.ru">
      <VButton class="w-10 h-10">
        <i class="icon-mail"></i>
      </VButton>
    </a>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import VButton from './VButton.vue';
import LanguageSelector from './LanguageSelector.vue';

export default defineComponent({
  name: 'VHeader',
  components: {
    VButton,
    LanguageSelector,
  },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>
