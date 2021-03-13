import { ref } from 'vue';

const scrollRef = ref(0);

window.addEventListener('scroll', () => {
  scrollRef.value = window.scrollY;
});

const useScroll = () => scrollRef;

export default useScroll;
