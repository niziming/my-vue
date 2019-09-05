<template>
  <div>
    <h2>指令</h2>
    <button v-on:click="seen = seen === true ? false : true">点击改变</button>
    <p v-if="seen">现在你看到我了</p>
    <h2>实例</h2>
  </div>
</template>

<script>
  export default {
    name: "Commond",
    data(){
      return{
        seen : true
      }
    }
  }
</script>

<style scoped>

</style>
