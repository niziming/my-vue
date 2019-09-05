<template>
  <div>
    <h2>使用 JavaScript 表达式</h2>
    迄今为止，在我们的模板中，我们一直都只绑定简单的属性键值。
    但实际上，对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。
    <h2>实例:</h2>
    <h5>{{num + 1}}</h5>
    <h5>{{ok ? 'yes' : 'no'}}</h5>
    <h5>{{msg.split('').reverse().join('')}}</h5>
    <!-- 这是语句，不是表达式 -->
    <!--<h3>{{ var a = 1 }}</h3>-->

    <!-- 流控制也不会生效，请使用三元表达式 -->
    <!--<h3>{{ if (ok) { return message } }}</h3>-->
    <button v-on:click="msg = msg.split('').reverse().join('')">点击</button>
  </div>
</template>

<script>
  export default {
    name: "UseJSExpression",
    data() {
      return {
        num: 1,
        msg: '我掀起破烂抛弃了我哦哦',
        ok: true
      }
    }
  }
</script>

<style scoped>

</style>
