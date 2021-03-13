<template>
  <div class="w-full h-full" :key="key">
    <router-view class="bg-black" />
    <VHeader />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import AOS from 'aos';
import { useI18n } from 'vue-i18n';
import useForceReload from './hooks/useForceReload';

import VHeader from './components/VHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    VHeader,
  },
  setup() {
    AOS.init();

    const { locale } = useI18n();
    const { key, forceReload } = useForceReload();
    watch(locale, forceReload);

    return {
      key,
      forceReload,
    };
  },
});
</script>
