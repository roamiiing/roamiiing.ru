<template>
  <div class="w-full flex flex-col">
    <input
      v-if="type !== 'textarea'"
      v-model="model"
      :type="type"
      :class="classBind"
      :placeholder="placeholder"
    >
    <textarea
      v-else
      v-model="model"
      :class="classBind"
      :placeholder="placeholder"
    ></textarea>
    <small class="ml-6 h-6 text-red-700" v-if="validationModel" v-text="model && error">
    </small>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  watch,
  computed,
  toRefs,
} from 'vue';

interface ValidationStep {
  regex: RegExp;
  error?: string;
}

export default defineComponent({
  name: 'VInput',
  props: {
    placeholder: {
      type: String,
      required: false,
    },
    validationModel: {
      type: Object as () => ValidationStep[],
      required: false,
    },
    type: {
      type: String,
      validate: (val: string) => ['email', 'textarea'].includes(val),
      required: false,
    },
  },
  setup(props, { emit }) {
    const model = ref('');
    const { validationModel } = toRefs(props);

    const testRegex = (str: string, { regex, error }: ValidationStep) => {
      // replacing '\n' with '' is needed to validate length of a multiline string
      if (!regex.test(str.replace(/\n/g, ''))) {
        throw new Error(
          error || 'invalid value',
        );
      }
    };

    const error = computed<string | undefined>(() => {
      try {
        if (validationModel && validationModel.value) {
          validationModel.value.forEach((v) => testRegex(model.value, v));
        }
      } catch (e) {
        return e.message;
      }
      return undefined;
    });

    watch(model, () => emit('type', model.value, !error.value));

    const classBind = computed(() => ({
      'border-opacity-100': model.value,
      'border-white border-opacity-50 hover:border-opacity-70': !model.value,
      'border-green': !error.value && model.value,
      'border-red-500': error.value && model.value,
    }));

    return {
      model,
      error,
      classBind,
    };
  },
});
</script>

<style scoped>
input, textarea {
  @apply w-full pl-6 pr-5 border-b-2 bg-white bg-opacity-5 outline-none
  focus:bg-opacity-10 focus:outline-none focus:border-opacity-90 transition-all
  duration-300;
}
input {
  @apply h-14;
}
textarea {
  @apply h-24 py-3;
}
</style>
