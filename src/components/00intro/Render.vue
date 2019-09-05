<template>
    <div>
      <h2 style="color: green">运行结果: </h2>
      {{msg}}
    </div>
</template>

<script>
    export default {
      name: "Render",
      data() {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      }
    }
</script>

<style scoped>

</style>
