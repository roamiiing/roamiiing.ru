<template>
  <div class="w-full h-full">
    <!-- Main section -->
    <section class="w-full h-full relative overflow-hidden text-white text-center">
      <VSketch class="absolute w-screen filter-blur-3" />
      <div class="absolute top-1/2 left-1/2 center">
        <VLogo data-aos="fade-down" data-aos-delay="100" />
        <h6 class="select-none" data-aos="fade-up" data-aos-delay="200">
          {{ t('home.web-developer') }}
        </h6>
      </div>
      <a class="absolute bottom-12 left-1/2 center">
        <div class="animate-bounce">
          <img
            :src="downArrowImgUrl"
            alt="arrow down"
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-anchor-placement="top-bottom"
          >
        </div>
      </a>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import VLogo from '../components/VLogo.vue';
import VSketch from '../components/VSketch.vue';

import downArrowImgUrl from '../assets/images/downArrow.svg';

export default defineComponent({
  name: 'Home',
  components: {
    VSketch,
    VLogo,
  },
  setup() {
    const { t } = useI18n();

    return {
      downArrowImgUrl,
      t,
    };
  },
});
</script>
