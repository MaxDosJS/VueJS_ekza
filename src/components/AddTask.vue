<template>
  <div class="input_users">
    <my-input class="my_input" label="Имя" v-model="user.name"></my-input>
    <my-input class="my_input" label="Фамилия" v-model="user.surname"></my-input>
    <br />
    <select class="select" name="select" v-model="user.role">
        <option value="Учитель">Учитель</option>
        <option value="Студент">Студент</option>
    </select>
    <my-input class="my_input_two" label="Возраст" v-model="user.age"></my-input>
    <button
      class="btn_save"
      @click="emits('addUser', Object.assign({ id: new Date().getTime() } as User, user))"
    >
      Сохранить
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import type { User } from '@/types/user'

interface Emits {
  (e: 'addUser', user: User): void
}
const emits = defineEmits<Emits>()

const user = ref<Partial<User>>({
  name: '',
  surname: '',
  role: '',
  age: 0
})
</script>

<style scoped>
.select{
  position: relative;
  left: 210px;
  bottom: 50px;
}
.input_users {
  height: 150px;
  
}
.my_input {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 130px;
  margin-left: 10px;
}
.my_input_two {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 130px;
  margin-left: 205px;
  position: relative;
  bottom: 138px;
}
.btn_save {
  position: relative;
  left: 135px;
  bottom: 80px;
}
</style>

