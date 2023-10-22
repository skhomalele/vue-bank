<template>
  <div class="question" @click="isOpen = !isOpen">
    <div class="question-title">{{ question.title }}</div>
    <div class="question-body" v-if="isOpen">{{ question.body }}</div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
props: ['question'],
  setup() {
  const isOpen = ref(false)

    return {
    isOpen
    }
  }
}
</script>

<style scoped>
.question-body {
  margin-top: 20px;
}
</style>