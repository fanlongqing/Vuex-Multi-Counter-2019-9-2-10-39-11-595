<template>
    <div>
        <h1> welcome to {{$route.params.username}}! </h1>
         <p>
          <router-link :to="'/welcome/'+$route.params.username">welcome</router-link>
        </p>
          <p>
           <router-link :to="{name:'counter'}"> go to counter</router-link>
           </p>
         <p>
          <router-link :to="{name:'toDoList'}"> go to DoList</router-link>
          </p>
          
         <router-view></router-view>
        
    </div>
</template>
<script>
export default {
    name:'welcome',
    props:['username']
}
</script>