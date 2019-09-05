<template>
  <div>
    {{this.a}}
  </div>
</template>

<script>
  export default {
    name: "LifeLoop",
    data() {
      console.log("data")
      return{
        a: 1
      }
    },
    created() {
      console.log("created")
      console.log(this.a)
    }
  }
</script>

<style scoped>

</style>
