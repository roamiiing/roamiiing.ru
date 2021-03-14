<template>
  <div class="w-10 h-36 flex flex-col justify-between">
    <transition-group name="list-complete">
      <!--  This is actually the worst implementation ever, but animation only works with this  -->
      <!--  TODO: Somehow implement this properly with v-for  -->
      <VButton
        v-if="toggled"
        class="w-10 h-10"
        :class="{
          'border-green': locale === 'ru',
        }"
        @click="setLocale('ru')"
      >
        <img alt="ru" class="w-6 h-6 rounded-full" :src="flagRuImgUrl">
      </VButton>
      <VButton
        v-if="toggled"
        class="w-10 h-10"
        :class="{
          'border-green': locale === 'en',
        }"
        @click="setLocale('en')"
      >
        <img alt="uk" class="w-6 h-6 rounded-full" :src="flagUkImgUrl">
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
import { defineComponent } from 'vue';
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

    return {
      toggle,
      toggled,
      setLocale,
      locale,
      flagRuImgUrl,
      flagUkImgUrl,
    };
  },
});
</script>

<style>
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
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
