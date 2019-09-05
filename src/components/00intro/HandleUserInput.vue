<template>
  <div>
    <el-button v-on:click="reverseMessage">点击改变</el-button>
    <h2>{{msg}}</h2>

    <p>{{msg}}</p>
    <label>
      <input v-model="msg">
    </label>

  </div>
</template>

<script>
  export default {
    name: "HandleUserInput",
    data() {
      return {
        msg: "hello vue.js"
      }
    },
    methods: {
      reverseMessage: function () {
        this.msg = this.msg.split('').reverse().join('')
      }
    }
  }
</script>

<style scoped>

</style>
