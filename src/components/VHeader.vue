<template>
  <header
    class="
      fixed z-50 top-0 left-0 w-full h-18 p-4
      bg-blackout duration-500
      flex flex-row justify-between text-xl
    "
  >
    <LanguageSelector />
    <a href="#feedback">
      <VButton class="w-10 h-10">
        <i class="icon-mail"></i>
      </VButton>
    </a>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import VButton from './VButton.vue';
import LanguageSelector from './LanguageSelector.vue';

const { t } = useI18n();
</script>
