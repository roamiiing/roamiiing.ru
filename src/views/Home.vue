<template>
  <div class="w-full">
    <!-- Main section -->
    <section class="w-full h-screen relative overflow-hidden text-white text-center">
      <Sketch class="absolute w-full w-screen blur" />
      <div
        class="absolute top-1/2 left-1/2 center"
      >
        <Logo data-aos="fade-down" data-aos-delay="100" />
        <h6 data-aos="fade-up" data-aos-delay="200">web developer</h6>
      </div>
      <a href="#about" class="absolute bottom-12 left-1/2 center">
        <div class="animate-bounce">
          <img
            :src="downArrowImgUrl"
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
import Logo from '../components/Logo.vue';
import Sketch from '../components/Sketch.vue';

import downArrowImgUrl from '../assets/images/downArrow.svg';

export default {
  name: 'Home',
  components: {
    Sketch,
    Logo,
  },
  setup() {
    return {
      downArrowImgUrl,
    };
  },
};
</script>
