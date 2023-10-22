<template>
  <app-loader v-if="loading"></app-loader>
<app-page back title="Заявка" v-else-if="request">
  <p><strong>Имя владельца: </strong>{{ request.fio }}</p>
  <p><strong>Телефон: </strong>{{ request.phone }}</p>
  <p><strong>Сумма: </strong>{{ currency(request.amount) }}</p>

  <div class="form-control">
    <label for="status">Статус</label>
    <select id="status" v-model="status">
      <option value="done">Завершен</option>
      <option value="cancelled">Отменен</option>
      <option value="active">Активен</option>
      <option value="pending">Выполняется</option>
    </select>
  </div>

  <p><strong>Статус: </strong><app-status :type="request.status" /></p>
  <button class="btn danger" @click="remove">Удалить</button>
  <button class="btn" v-if="hasChanges" @click="update">Обновить</button>
</app-page>
  <h3 v-else class="text-center"> Такой заявки нет </h3>
</template>

<script>
import {ref, onMounted, computed} from "vue";
import {useRoute, useRouter} from "vue-router";
import AppPage from "@/components/UI/AppPage";
import AppStatus from "@/components/UI/AppStatus";
import AppLoader from "@/components/UI/AppLoader";
import {useStore} from "vuex";
import {currency} from "@/utils/currency";
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const loading = ref(true)
    const request = ref({})
    const status = ref('')


    onMounted(async () => {
      loading.value = true
      request.value = await store.dispatch('request/loadById', route.params.id)
      loading.value = false
      status.value = request.value.status
    })


    const hasChanges = computed(() => request.value.status !== status.value)

    const remove = async () => {
      await store.dispatch('request/remove', route.params.id)
      router.push('/')
    }

    const update = async () => {
      const data = {...request.value, status: status.value, id: route.params.id}
      await store.dispatch('request/update', data)
      request.value.status = status.value
    }

    return {
      loading,
      request,
      currency,
      remove,
      update,
      status,
      hasChanges
    }
  },
components: {AppPage, AppStatus, AppLoader}
}
</script>

<style scoped>

</style>