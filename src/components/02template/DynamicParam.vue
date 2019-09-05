<template>
  <div>
    <h2>动态参数</h2>
    <h3>2.6.0新增</h3>
    语法: {{text}} <br>
    <a v-on:focus="doSomething">{{focusText}}</a>
    <h2>实例</h2>
    <h2>对动态参数的值的约束</h2>
    动态参数预期会求出一个字符串，异常情况下值为 null。
    这个特殊的 null 值可以被显性地用于移除绑定。
    任何其它非字符串类型的值都将会触发一个警告。
    <!--<a v-bind:[foo + bar]="value">...</a>-->
    <!--<a v-bind:[foo]="value">text</a>-->
  </div>
</template>

<script>
  export default {
    name: "DynamicParam",
    data(){
      return{
        text: '<a v-bind:[attributeName]="url"></a>',
        focusText: '聚焦文本',
        value: 'footext',
      }
    },
    methods:{
      doSomething(){
        //var _this = this
        this.focusText = 'change Text'
      }
    }
  }
</script>

<style scoped>

</style>
