<template>
  <form
    v-if="!success"
    @submit.prevent="submit"
    class="w-full flex flex-col items-center"
    :class="{
      'pointer-events-none opacity-70': loading,
    }"
  >
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
        html-button
        :loading="loading"
        :disabled="!formIsValid"
      >
        {{ t('form.submit') }}
      </VButton>
    </div>
    <div v-if="error" class="text-red-600 text-center mt-8">{{ error }}</div>
  </form>
  <div
    v-else
    class="text-center"
  >
    <div class="mb-3"><i class="icon-ok text-5xl text-green" data-aos="fade-in"></i></div>
    <h3 class="text-green mb-6">{{ t('form.sent') }}</h3>
    <p>{{ t('form.answer-soon') }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import * as yup from 'yup';
import useInput from '../hooks/useInput';

import VInput from './VInput.vue';
import VButton from './VButton.vue';

const { t } = useI18n();

const loading = ref(false);
const statusCode = ref<number | undefined>();
const success = ref(false);

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

const submit = async () => {
  loading.value = true;
  statusCode.value = undefined;
  success.value = false;

  // TODO: Maybe use axios to request?
  const response = await fetch('https://email-feedback.herokuapp.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: nameRef.value,
      email: emailRef.value,
      message: messageRef.value,
    }),
  });

  loading.value = false;

  statusCode.value = response.status;
  if (response.status === 200) {
    success.value = true;
  }
};

const error = computed<string | undefined>(() => {
  if (statusCode.value && statusCode.value >= 300) {
    switch (statusCode.value) {
      case 403:
        return t('form.errors.403');
      case 429:
        return t('form.errors.429');
      case 500:
        return t('form.errors.500');
      default:
        return t('form.errors.unknown');
    }
  }
  return undefined;
});
</script>
