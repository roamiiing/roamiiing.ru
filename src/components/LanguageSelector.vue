<template>
  <div class="w-10 h-36 flex flex-col justify-between">
    <transition-group name="list-complete">
      <VButton
        v-for="{ code, icon } in localesComputed"
        :key="code"
        class="w-10 h-10"
        :class="{
          'border-green': locale === code,
        }"
        @click="setLocale(code)"
      >
        <img :alt="code" :src="icon" class="w-6 h-6 rounded-full">
      </VButton>
      <VButton class="w-10 h-10 relative" @click="toggle">
        <transition name="fade">
          <i
            v-if="toggled"
            class="icon-left-open-big absolute center top-1/2 left-1/2 text-base"
          ></i>
          <i
            v-else
            class="icon-globe absolute center top-1/2 left-1/2"
          ></i>
        </transition>
      </VButton>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import useToggle from '../hooks/useToggle';

import VButton from './VButton.vue';

import flagRuImgUrl from '../assets/images/flag-ru.svg';
import flagUkImgUrl from '../assets/images/flag-uk.svg';

export default defineComponent({
  name: 'LanguageSelector',
  components: {
    VButton,
  },
  setup() {
    const { toggle, toggled } = useToggle();

    const { locale } = useI18n();

    const setLocale = (_locale: string) => {
      if (locale.value !== _locale) {
        locale.value = _locale;
      }
      toggle();
    };

    const locales = [{
      icon: flagRuImgUrl,
      code: 'ru',
    }, {
      icon: flagUkImgUrl,
      code: 'en',
    }];

    const localesComputed = computed(() => (toggled.value ? locales : []));

    return {
      toggle,
      toggled,
      setLocale,
      locale,
      localesComputed,
      flagRuImgUrl,
      flagUkImgUrl,
    };
  },
});
</script>

<style scoped>
.list-complete-item {
  transition: all 0.8s ease;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.list-complete-leave-active {
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
