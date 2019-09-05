<template>
  <div>
    <h3>{{data.foo}}</h3>
    <button v-on:click="data.foo = data.foo === 'origin' ? 'changes' : 'origin' ">{{data.foo}}</button>
  </div>
</template>

<script>
    export default {
      name: "DataAndMerhod",
      data(){
        var obj = {
          foo: 'bar'
        }
        return{
          data: obj
        }
      }
    }
</script>
<style scoped>
</style>
