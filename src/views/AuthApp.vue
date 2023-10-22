<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Войти в систему</h1>
    <p>Логин: test@mail.ru</p>
    <p>Пароль: 12345678</p>
    <div :class="['form-control', {invalid: eError}]">
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="ivan.ivanov@mail.com" v-model="email" @blur="eBlur">
      <small v-if="eError">{{ eError }}</small>
    </div>
    <div class="form-control" :class="pError ? 'invalid' : ''">
      <label for="password">Пароль</label>
      <input type="password" id="password" placeholder="********" v-model="password" @blur="pBlur">
      <small v-if="pError">{{ pError }}</small>
    </div>
    <button class="btn primary" :disabled="isSubmitting || isTooManyAttempts">Войти</button>
    <span class="text-danger" v-if="isTooManyAttempts">Слишком много попыток войти в систему. Попробуйте позже</span>
  </form>
</template>

<script>
import {useLoginForm} from "@/use/login-form";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {error} from "@/utils/error";

export default {
  setup() {
    const route = useRoute()
    const store = useStore()

    if (route.query.message) {
      store.dispatch('setMessage', {
        value: error(route.query.message),
        type: 'warning'
      })
    }
    return {
      ...useLoginForm()
    }
  }
}
</script>

<style scoped>

</style>