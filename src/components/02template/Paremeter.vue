<template>
  <div>
    <h2>参数</h2>
    <a :href="url">{{text}}</a>
    <a v-on:click="doSomething">点击改变</a>
    <h2>实例</h2>
  </div>
</template>

<script>
  export default {
    name: "Paremeter",
    data(){
      return{
        text: '跳转百度',
        url : 'https://www.baidu.com',
      }
    },
    methods:{
      doSomething(){
        //var _this = this
        this.url = 'https://www.bilibili.com'
        this.text = '跳转bilibili'
        console.log(this.url)
      }
    }
  }
</script>

<style scoped>

</style>
