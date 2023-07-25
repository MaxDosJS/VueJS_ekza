<template>
  <div class="task">
    <router-link :to="{ name: 'UserId', params: { id: task.id }}">Имя: {{ props.task.name }}</router-link>
    <p>Фамилия: {{ props.task.surname }}</p>
    <p>Роль: {{ props.task.role }}</p>
    <p class="age">Возраст: {{ props.task.age }}</p>
    <button @click="
    emits('delete', props.task.id)">Удалить</button>
  </div>
</template>

<script setup lang="ts">

import type { User } from '@/types/user'

interface Props {
  task: User
}
const props = defineProps<Props>()

interface Emits {
  (e: 'delete', id: number): void
}

const emits = defineEmits<Emits>();
</script>

<style scoped>

.task{
  border: 2px solid;
  border-color: blue;
}
</style>