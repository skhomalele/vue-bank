<template>
  <div class="container">
    <app-message></app-message>
    <router-view></router-view>
  </div>
</template>

<script>
import AppMessage from "@/components/UI/AppMessage";
export default {
  components: { AppMessage, }
}
</script>

<style scoped>

</style>