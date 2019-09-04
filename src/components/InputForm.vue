<template>
<div>
   <input type="text" v-model="inputtingText">
   <button @click="handleInput">Add</button>
</div>
</template>
<script>
export default {
    name:"input-form",
    data :function(){
        return{
            inputtingText:''
            }
    },
    methods:{
        handleInput: function(){
            this.$router.push('welcome/'+this.inputtingText);
        }
    }
}
</script>
