<template>
  <div>
    <el-button v-on:click="changeSeen">点击改变</el-button>
    <p v-if="seen">看到了</p>
  </div>
</template>

<script>
  export default {
    name: "ConditionsAndLoop",
    data(){
      return{
        seen: true
      }
    },
    methods:{
      changeSeen : function () {
        this.seen = this.seen === true ? false : true
        console.log(this.seen)
      }
    }


  }
</script>

<style scoped>

</style>
