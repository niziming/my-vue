<template>
  <div id="comp">
    <test></test>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "ComponentDemo"
  }
  Vue.component('test', {
    template:
      "<ol>" +
        "<li>hello</li>" +
        "<li>yes</li>" +
      "</ol>"
  });
  new Vue({

  })
</script>

<style scoped>

</style>
