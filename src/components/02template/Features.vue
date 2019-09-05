<template>
  <div>
    <h2>特性</h2>
    Mustache 语法不能作用在 HTML 特性上，遇到这种情况应该使用 v-bind 指令：
    v-bind 指令被用来响应地更新 HTML 属性，其实它是支持一个单一 JavaScript 表达式 （v-for 除外）。
    <br>
    <h2>实例:</h2>
    <span :style="dynamicId" class="spanCss">{{text}}</span>
    <button v-bind:disabled="isButtonDisabled">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "Features",
    data() {
      return {
        dynamicId: 2,
        isButtonDisabled: false,
        text: '我原本是白色'
      }
    }
  }
</script>

<style scoped>
  .spanCss{
    color: red;
  }
</style>
