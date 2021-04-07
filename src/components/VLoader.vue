<template>
  <div class="w-full border-none">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VLoader',
});
</script>

<style scoped>
.dot {
  @apply w-2 h-2 mx-1 rounded-full bg-white animate-bounceParticles;
}
.dot:nth-of-type(1) {
  animation-delay: 1s;
}
.dot:nth-of-type(2) {
  animation-delay: 1.2s;
}
.dot:nth-of-type(3) {
  animation-delay: 1.5s;
}
</style>
