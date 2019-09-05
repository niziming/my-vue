<template>
  <div>
    <h2>v-bind缩写</h2>
    <!-- 完整语法 -->
    <a v-bind:href="url">完整语法</a>
    <!-- 缩写 -->
    <a :href="url">缩写</a>

    <h2>v-on 缩写</h2>
    <!-- 完整语法 -->
    <a v-on:click="doSomething">click</a>
    <!-- 缩写 -->
    <a @click="doSomething">click</a>

  </div>
</template>

<script>
  export default {
    name: "Abbr",
    data() {
      return {
        url: 'https://www.baidu.com'
      }
    },
    methods:{
      doSomething(){
        alert("msg")
      }
    }
  }
</script>

<style scoped>

</style>
