<template>
   <div>
       <router-link :to="{ name: 'lessons'}">Перейти в раздел "Список занятий"</router-link>
   </div>
 
   <div v-if="studentTask.length > 0">

       <h2>Билеты</h2>
       <div  v-for="studenttask in studentTask" :key="studenttask.id">
           <p><strong>Билет:</strong> <span>{{ studenttask.Ticket }}</span></p>
           <p><strong>Студент:</strong> <span>{{ studenttask.student }}</span></p>
           <p><strong>Учитель:</strong> <span>{{ studenttask.teacher }}</span></p>
           <p><strong>Задача:</strong> <span>{{ studenttask.task }}</span></p>
           
           <hr>
       </div>
   </div>
   <div v-else>
       <p>Данных нет.</p>
   </div>
 </template>
 
 <script setup lang="ts">
 import { ref, onMounted } from 'vue'
 import type { Lessons } from '@/types/lessons'
 
 const studentTask = ref<Lessons[]>([])
 
 onMounted(() => {
 const taskData = localStorage.getItem('Task');
 if (taskData !== null) {
   try {
     studentTask.value = JSON.parse(taskData) as Lessons[];
   } catch (error) {
     console.error('Ошибка при парсинге данных из localStorage:', error);
     studentTask.value = [];
   }
 } else {
   studentTask.value = [];
 }
 });
 </script>
 
 <style scoped>

 </style>