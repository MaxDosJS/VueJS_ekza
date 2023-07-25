<template>
  <div class="lesson">
   
    
    <router-link :to="{ name: 'LessonsAdd' }"><p>Билет: {{ props.lesson.Ticket }}</p></router-link>
    <p>Учитель: {{ props.lesson.teacher }}</p>
    <p>Студент: {{ props.lesson.student }}</p>
    <p>Задача: {{ props.lesson.task }}</p>

    <button @click="emits('delete', props.lesson.id)">Удалить</button>
  </div>
</template>

<script setup lang="ts">
import type { Lessons } from '@/types/lessons'

interface Props {
  lesson: Lessons
}
const props = defineProps<Props>()

interface Emits {
  (e: 'delete', id: number): void
}

const emits = defineEmits<Emits>()
</script>

<style scoped>
.lesson{
  position: relative;
  bottom: 100px;
  left: 450px;
}
.task {
  border: 2px solid;
  border-color: red;
}
</style>
