<template>
  <div id="example">
    <h3>计算属性的setter</h3>
    <p>计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：</p>
    {{fullName}}
  </div>
</template>

<script>
  export default {
    name: "ComputedSetter",
    data(){
      return{
        firstName: 'Foo',
        lastName: 'Bar',
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
      fullName: {
        // getter
        get() {
          console.log('getter被调用了')
          return this.firstName + ' ' + this.lastName
        },
        set() {
          console.log('setter被调用了')

        }
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
