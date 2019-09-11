<template>
  <div id="example">
    <p>Original msg: {{msg}}</p>
    <p>Computed reversed msg: {{reversedMsg}}</p>
    计算属性缓存 vs 方法
    {{ now }}

  </div>
</template>

<script>
  export default {
    name: "BasicExample",
    data(){
      return{
        msg:'hello'
      }
    },
    computed:{
      reversedMsg(){
        //console.log(this.msg)
        return this.msg.split('').reverse().join('')
      },
      //now: function () {
      //  return Date.now()
      //}
    },
    methods: {
      //reversedMsg(){
      //  console.log(this.msg)
      //  return this.msg.split('').reverse().join('')
      //},
      now: function () {
        return Date.now()
      }
    }
  }
</script>

<style scoped>

</style>
