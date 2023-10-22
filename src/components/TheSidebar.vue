<template>
  <div class="sidebar" v-if="sidebar">
    <span class="sidebar-close" @click="close">&times;</span>
    <div class="sidebar-content">
      <p>- Заходит в бар улитка, и говорит: "можно виски с колой? "</p>
      <p>- Бармен: "мы не обслуживаем улиток, извини" и вышвырнул её за дверь;</p>
      <p>- Через неделю снова заходит улитка в бар, и говорит:</p>
      <p>- " Зачем ты это сделал?" </p>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup() {
    const store = useStore()

    const sidebar = computed(() => store.state.sidebar)

    return {
      sidebar,
      close: () => store.commit('closeSidebar')
    }
  }
}
</script>

<style scoped>

</style>