<template>
  <div class="w-full flex flex-col items-center">
    <VInput
      @type="onNameInput"
      :validation-model="nameModel"
      :placeholder="t('form.name.placeholder')"
    />
    <VInput
      @type="onEmailInput"
      type="email"
      :validation-model="emailModel"
      :placeholder="t('form.email.placeholder')"
    />
    <VInput
      class="mb-4"
      @type="onMessageInput"
      type="textarea"
      :validation-model="messageModel"
      :placeholder="t('form.message.placeholder')"
    />
    <div class="px-4 w-full flex justify-center">
      <VButton
        class="h-14 max-w-xs w-full"
        :disabled="!formIsValid"
      >
        {{ t('form.submit') }}
      </VButton>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import * as yup from 'yup';
import useInput from '../hooks/useInput';

import VInput from './VInput.vue';
import VButton from './VButton.vue';

export default defineComponent({
  name: 'FeedbackForm',
  components: {
    VButton,
    VInput,
  },
  setup() {
    const { t } = useI18n();

    const {
      reference: nameRef,
      isValid: nameIsValid,
      onInput: onNameInput,
    } = useInput();
    const {
      reference: emailRef,
      isValid: emailIsValid,
      onInput: onEmailInput,
    } = useInput();
    const {
      reference: messageRef,
      isValid: messageIsValid,
      onInput: onMessageInput,
    } = useInput();

    const nameModel = computed(() => yup
      .string()
      .trim()
      .required(t('form.name.required'))
      .matches(/^[a-zA-Zа-яА-ЯёЁ\s]*$/, t('form.name.letters-only'))
      .max(30, ({ max }) => t('form.name.too-long', { max })));

    const emailModel = computed(() => yup
      .string()
      .trim()
      .required(t('form.email.required'))
      .email(t('form.email.invalid')));

    const messageModel = computed(() => yup
      .string()
      .trim()
      .required(t('form.message.required'))
      .min(100, ({ min }) => t('form.message.too-short', { min }))
      .max(10000, ({ max }) => t('form.message.too-long', { max })));

    const formIsValid = computed(() => (
      [nameIsValid, messageIsValid, emailIsValid].every((v) => v.value)));

    return {
      t,
      onNameInput,
      onEmailInput,
      onMessageInput,
      nameModel,
      emailModel,
      messageModel,
      formIsValid,
    };
  },
});
</script>
