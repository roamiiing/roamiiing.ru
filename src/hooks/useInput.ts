import { ref } from 'vue';

export default function useInput(initial = '') {
  const reference = ref(initial);
  const isValid = ref(false);

  const onInput = (value: string, valid?: boolean) => {
    reference.value = value;
    isValid.value = valid || false;
  };

  return {
    reference,
    onInput,
    isValid,
  };
}
