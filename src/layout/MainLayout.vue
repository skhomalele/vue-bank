<template>
  <the-navbar></the-navbar>
  <the-sidebar></the-sidebar>
  <div class="container with-nav">
    <app-message></app-message>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import TheSidebar from "@/components/TheSidebar";
import AppMessage from "@/components/UI/AppMessage";
export default {
components: {TheNavbar, AppMessage, TheSidebar}
}
</script>

<style scoped>

</style>