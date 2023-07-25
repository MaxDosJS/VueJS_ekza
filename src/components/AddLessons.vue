<template>
    <div class="input_users">
       <my-input class="my_input" label="Учитель" v-model="lesson.teacher"></my-input>
       <my-input class="my_input" label="Студент" v-model="lesson.student"></my-input>

       <textarea v-model="lesson.task" class="zada4a" name="text" id="" cols="30" rows="8"></textarea>
<p class="select_p">Билет№
    <select class="select_one" name="select" v-model="lesson.Ticket">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        </select>
</p>
<!-- <label for="start"><p class="date_p">Дата проведение:</p></label>
<input type="date" id="start" name="lesson_date"
       
       min="2018-01-01" max="2023-12-31" v-model="lesson.date"> -->

       

      
       <button class="btn_save" @click="emits('addTask', Object.assign({id: new Date().getTime() } as Lessons, lesson))">Сохранить</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import type { Lessons } from '@/types/lessons';

interface Emits{
    (e: 'addTask', lessons: Lessons): void
}
const emits = defineEmits<Emits>();

const lesson = ref<Partial<Lessons>>({
    task: '',
    Ticket: '',
    exercise: '',
    teacher: '',
    student: '',
})
</script>

<style scoped>
.date_p{
    position: relative;
    left: -10px;
    bottom: 250px;
}
#start{
    position: relative;
    left: -5px;
    bottom: 240px;
}
.select_p{
      position: relative;
    bottom: 228px;
    left: 200px;
}

.zada4a{
    position: relative;
    left: 130px;
    top: 20px;
}
.input_users{
    height: 150px;
}
.my_input{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 150px;
    position: relative;
    top: 15px;
    left: 160px;
}
.my_input_two{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 150px;
    margin-left: 205px;
    position: relative;
    bottom: 114px;
}
.btn_save{
    position: relative;
    left: 200px;
    bottom: 10px;
}


</style>