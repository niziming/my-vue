<template>
  <div>
    <h2>原始HTML</h2>
    双大括号会将数据解释为普通文本，而非 HTML 代码。
    为了输出真正的 HTML，你需要使用 v-html 指令：
    <h2>{{rawHtml}}</h2>
    <h2 v-html="rawHtml"></h2>
  </div>
</template>

<script>
  export default {
    name: "OriginHTML",
    data() {
      return {
        rawHtml: "<span style='color: red'>This should be red</span>"
      }
    }
  }
</script>

<style scoped>

</style>
