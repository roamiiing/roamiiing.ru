<template>
  <div class="relative w-logoSmall h-fullLogoSmall sm:w-logo sm:h-fullLogo">
    <InlineSvg
      class="absolute bottom-0 left-0 w-logoSmall h-logoSmall sm:w-logo sm:h-logo"
      :src="logoImgUrl"
      alt="logo"
    />
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import InlineSvg from 'vue-inline-svg';

import logoImgUrl from '../assets/images/logo.svg';
</script>

<style scoped>
.dot {
  @apply absolute -top-halfScreen w-1 h-1 sm:w-2.5 sm:h-2.5
  rounded-full bg-green animate-fallParticles;
}
.dot:nth-of-type(1) {
  left: 57%;
  animation-delay: 1s;
}
.dot:nth-of-type(2) {
  left: 63%;
  animation-delay: 1.2s;
}
.dot:nth-of-type(3) {
  left: 69%;
  animation-delay: 1.5s;
}
</style>
