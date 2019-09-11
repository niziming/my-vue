<template>
  <div id="example">
    计算属性 vs 侦听属性
    <p>{{firstName}}</p>
    {{fullName}}
  </div>
</template>

<script>
  export default {
    name: "ComputedVSWatch",
    data(){
      return{
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
      }
    },
    watch:{
      firstName (val){
        this.fullName = val + ' ' + this.lastName
        console.log('firstName 被改变了')
        console.log(val)
      },
      lastName(val) {
        this.fullName = this.firstName + ' ' + val
      }
    },
    computed:{
      fullName() {
        return this.firstName + ' ' + this.lastName
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
