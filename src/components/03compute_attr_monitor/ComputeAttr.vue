<template>
  <div id="example">
    模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。
    在模板中放入太多的逻辑会让模板过重且难以维护。例如：
    {{msg.split('').reverse().join('')}}

  </div>
</template>

<script>
  export default {
    name: "ComputeAttr",
    data() {
      return {
        msg: 'msg.split'
      }
    },

  }
</script>

<style scoped>

</style>
