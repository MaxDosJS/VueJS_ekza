<template>
  <div>
    <h1>Добавить пользователя</h1>
    <add-task @add-user="save"></add-task>
    <user-task v-for="task in tasks" :key="task.id" :task="task" @delete="deleteTask"></user-task>
  </div>
  <div class="homepage_link">
    <router-link  to="/">Перейти на главную страницу</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AddTask from '@/components/AddTask.vue'
import UserTask from '@/components/UserTask.vue'

import type { User } from '@/types/user'

const tasks = ref<User[]>([])

const deleteTask = (taskId: number) => {
  tasks.value = tasks.value.filter((task) => task.id != taskId)
  localStorage.setItem('users', JSON.stringify(tasks.value))
}

const save = (task: User) => {
  tasks.value.push(task)
  localStorage.setItem('users', JSON.stringify(tasks.value))
}

onMounted(() => {
  try {
    tasks.value = JSON.parse(localStorage.getItem('users') as string) ?? []
  } catch {
    tasks.value = []
  }
})
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1{
  position: relative;
  left: 20px;
}
.homepage_link{
  width: 140px;
  height: 100px;
  position: absolute;
  left: 150px;
  bottom: 300px;
  /* margin-left: -300px;
  margin-bottom: 350px; */

}

</style>
@/types/user