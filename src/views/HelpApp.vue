<template>
  <app-page back title="Помощь">
    <question-file
        v-for="question in questions"
        :key="question.title"
        :question="question"
    ></question-file>
  </app-page>
</template>

<script>

import AppPage from "@/components/UI/AppPage";
import QuestionFile from "@/components/question/QuestionFile";
export default {
  setup() {
    const questions = [
      {title: 'Что будет, если кликнуть на меня?', body: 'Откроется ответ на этот вопрос'},
      {title: 'Другой вопрос', body: 'Другой ответ'},
      {title: 'Тот же самый вопрос', body: 'На удивление новый ответ'},
      {title: '42?', body: '42!'},
    ]

    return {
      questions
    }
  },
  components: {AppPage, QuestionFile}
}
</script>

<style scoped>

</style>
