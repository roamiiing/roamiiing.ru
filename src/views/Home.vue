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
      <a class="absolute bottom-12 left-1/2 center text-gray-300" href="#feedback">
        <div class="animate-bounce">
          <i
            class="icon-down-open-big text-4xl"
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-anchor-placement="top-bottom"
          ></i>
        </div>
      </a>
    </section>

    <section id="feedback" class="container flex flex-col justify-center items-center min-h-screen">
      <div class="text-center mx-4">
        <h1 class="mb-4" v-html="t('feedback.heading')"></h1>
        <p class="max-w-md mb-16" v-html="t('feedback.no-content')"></p>
      </div>
      <FeedbackForm
        class="max-w-screen-md"
      />
    </section>

    <footer class="container flex flex-col items-center px-6">
      <h2 class="mb-4" v-html="t('footer.heading')"></h2>
      <p class="mb-6" v-html="t('footer.this-was')"></p>
      <small v-html="t('footer.copyright')"></small>
      <small class="mb-20">
        <a href="mailto:web@roamiiing.ru">
          web@roamiiing.ru
        </a>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import FeedbackForm from '../components/FeedbackForm.vue';
import VSketch from '../components/VSketch.vue';
import VLogo from '../components/VLogo.vue';

export default defineComponent({
  name: 'Home',
  components: {
    FeedbackForm,
    VSketch,
    VLogo,
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>
