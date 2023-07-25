<template>
  <div>
    <router-link :to="{ name: 'Users' }">Перейти в раздел "Добавить пользователя"</router-link>
  </div>
      <p>
        <strong>Имя:</strong> <span>{{ currentUser?.name }}</span>
      </p>
      <p>
        <strong>Фамилия:</strong> <span>{{ currentUser?.surname }}</span>
      </p>
       <p> 
        <strong>Роль:</strong> <span>{{ currentUser?.role }}</span>
      </p>
       <p> 
        <strong>сколько лет:</strong> <span>{{ currentUser?.age }}</span>
      </p>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { User } from '@/types/user'

const tasks = ref<User[]>([])

const currentUser = ref<User>()

interface Props {
  id: string
}
const props = defineProps<Props>()

onMounted(() => {
  const usersData = localStorage.getItem('users')
  if (usersData !== null) {
    try {
      tasks.value = JSON.parse(usersData) as User[]
      tasks.value.forEach((item: User) => {
        if (item.id === +props.id) {
          currentUser.value = item;
        }
      })
    } catch (error) {
      console.error('Ошибка при парсинге данных из localStorage:', error)
      tasks.value = []
    }
  } else {
    tasks.value = []
  }
})
</script>

<style scoped></style>
