<template>
  <div id="example">
    <p>Original msg: {{msg}}</p>
    <p>Computed reversed msg: {{reversedMsg}}</p>
  </div>
</template>

<script>
  export default {
    name: "ComputeAttr",
    data(){
      return{
        msg:'msg.split'
      }
    },
    computed:{
      reversedMsg(){

      }
    }
  }
</script>

<style scoped>

</style>
