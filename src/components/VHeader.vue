<template>
  <header
    class="
      fixed z-50 top-0 left-0 w-full h-18 p-4
      text-xl bg-blackout duration-500
      flex flex-row justify-between
    "
  >
    <VButtonLabeled
      :label="t('home.switch-language')"
      icon="globe" width-expanded="160"
      @label-click="switchLanguages"
    />
    <VButtonLabeled :label="t('home.message-me')" icon="mail" width-expanded="160"/>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import VButtonLabeled from './VButtonLabeled.vue';

export default defineComponent({
  name: 'VHeader',
  components: {
    VButtonLabeled,
  },
  setup() {
    const { t, locale } = useI18n();
    const switchLanguages = () => {
      locale.value = (locale.value === 'en' ? 'ru' : 'en');
    };
    return {
      t,
      switchLanguages,
    };
  },
});
</script>
