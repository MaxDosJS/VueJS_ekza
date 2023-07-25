<template>
    <div>
        <ul>
            <li> 
                <router-link :to="{ name: 'HomePage'}">Главная</router-link>
            </li>
            <li class="li_Users">
                <router-link :to="{ name: 'Users'}">Список пользователей</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'lessons'}">Список занятий</router-link>
            </li>
        </ul>
 
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

li{
    width: 140px;
    height: 90px;
}
.li_Users{
    width: 200px;
}
ul{
    display: flex;
    justify-content: space-between;
    
}
</style>