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

    const createStep = (regex: RegExp, error?: string) => ({ regex, error });

    // TODO: Use `yup` for validation and somehow make it reactive
    const nameModel = computed(() => [
      createStep(/^[a-zA-Zа-яА-ЯёЁ\s]*$/, t('form.name.letters-only')),
      createStep(/^.+$/, t('form.name.too-short')),
      createStep(/^.{0,50}$/, t('form.name.too-long')),
    ]);

    const emailModel = computed(() => [
      // eslint, why you do that? 🧐
      // eslint-disable-next-line no-useless-escape
      createStep(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, t('form.email.invalid')),
    ]);

    const messageModel = computed(() => [
      createStep(/^[a-zA-Zа-яА-ЯёЁ0-9!.?\-_=+*():;,/\s]*$/, t('form.message.disallowed-chars')),
      createStep(/^.{100,}$/, t('form.message.too-short')),
      createStep(/^.{0,10000}$/, t('form.message.too-long')),
    ]);

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
