import { ref } from 'vue';

const useToggle = (initial?: boolean) => {
  const toggled = ref(initial || false);

  const toggle = () => {
    toggled.value = !toggled.value;
  };

  return {
    toggle,
    toggled,
  };
};

export default useToggle;
