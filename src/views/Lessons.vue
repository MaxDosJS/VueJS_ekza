<template>
  <div>
    <h1>Список занятий</h1>

    <add-lessons @add-task="save"></add-lessons>
    <user-lessons
      v-for="lesson in lessons"
      :key="lesson.id"
      :lesson="lesson"
      @delete="deleteTask"
    ></user-lessons>
    <!-- <router-link class="btn_lessons_link" :to="{ name: 'LessonsAdd' }"
      ><button>Добавить задачу</button></router-link
    > -->
    <router-link class="HomePage_btn" :to="{ name: 'HomePage' }">Home page</router-link>
  </div>
  
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import UserLessons from '@/components/UserLessons.vue'
import AddLessons from '@/components/AddLessons.vue'

import type { Lessons } from '@/types/lessons'

const lessons = ref<Lessons[]>([])

const deleteTask = (lessonId: number) => {
  lessons.value = lessons.value.filter((lesson) => lesson.id != lessonId)
  localStorage.setItem('Task', JSON.stringify(lessons.value))
}

const save = (lesson: Lessons) => {
  lessons.value.push(lesson)
  localStorage.setItem('Task', JSON.stringify(lessons.value))
  console.log(lesson);
  
}

onMounted(() => {
  try {
    lessons.value = JSON.parse(localStorage.getItem('Task') as string) ?? []
  } catch {
    lessons.value = []
  }
})
</script>

<style scoped>
h1{
  margin-left: 150px;
}
.btn_lessons_link {
  position: relative;
  left: 250px;
}
.HomePage_btn{
  display: block;
  position: relative;
  left: 550px;
  bottom: 350px;
}
</style>
