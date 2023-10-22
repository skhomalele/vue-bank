<template>
  <app-loader v-if="loading"></app-loader>
<app-page v-else title="Список заявок">
  <template #header>
    <button class="btn primary" @click="modal = true">Создать</button>
  </template>
  <request-table :requests="requests"></request-table>

  <teleport to="body">
    <app-modal v-if="modal" title="Создать заявку" @close="modal = false">
      <request-modal @created="modal = false"></request-modal>
    </app-modal>
  </teleport>
</app-page>
</template>

<script>
import AppModal from "@/components/UI/AppModal";
import AppPage from "@/components/UI/AppPage";
import AppLoader from "@/components/UI/AppLoader";
import RequestTable from "@/components/request/RequestTable";
import RequestModal from "@/components/request/RequestModal";
import {ref, computed, onMounted} from "vue";
import {useStore} from "vuex";

export default {
  components: {AppPage, RequestTable, AppModal, RequestModal, AppLoader},
  setup() {
    const store = useStore()
    const requests = computed(() => store.getters['request/requests'])
    const loading = ref(false)

    onMounted( async () => {
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false
    })

    const modal = ref(false)

    return {
      modal,
      requests,
      loading
    }
  }
}
</script>
