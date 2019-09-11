<template>
  <div>
    <h1>监听器</h1>
    虽然计算属性在大多数情况下更合适，
    但有时也需要一个自定义的侦听器。
    这就是为什么 Vue 通过 watch
    选项提供了一个更通用的方法，来响应数据的变化。
    当需要在数据变化时执行异步或开销较大的操作时，
    这个方式是最有用的。
  </div>
</template>

<script>
  export default {
    name: "Watch"
  }
</script>

<style scoped>

</style>
