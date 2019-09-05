<template>
  <div>
    <h2>{{localData.a}}</h2>
  </div>
</template>

<script>
  var data = {a: 1}
  export default {
    name: "FirstVueInstance",
    data() {
      return {
        localData: data
      }
    },
    mounted() {
      console.log(this.localData.a === data.a)
      this.localData.a = 3;
      data.a = 4;
    }
  }


</script>

<style scoped>

</style>
