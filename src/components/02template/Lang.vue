<template>
  <div>
    <h2>{{msg}}</h2>
    <h2 v-once>这个不会改变{{msg}}</h2>
    <button v-on:click="msg = 'changes'">changes</button>
  </div>
</template>

<script>
  export default {
    name: "Lang",
    data(){
      return{
        msg : "Using mustaches"
      }
    }
  }
</script>

<style scoped>

</style>
