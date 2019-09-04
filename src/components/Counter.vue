<template>
    <div class="counter">
        <button class="plus" @click="plus">+</button>
        <span class="value">{{value}}</span>
        <button class="minus" @click="minus">-</button>
    </div>
</template>

<script>
    export default {
        name: 'counter',
        props: {
            index: Number,
            value: Number,
        },
        methods: {
            minus: function () {
                this.$store.commit("minusValue",this.index);
                // this.$emit('update', this.index, this.value - 1)
                // this.$store.state.counter[this.index].value=element.value-1
            },
            plus: function () {
                // this.$emit('update', this.index, this.value + 1)
                if(this.$store.getters.countersSum>=10 || this.$store.state.counters[this.index].value>=10){
                    this.$router.push({ path: '/' })
                } 
                else{
                    this.$store.commit("plusValue",this.index);
                }
               
                  
        }
    }
}
</script>
<style scoped>

</style>
    