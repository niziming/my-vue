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
        console.log('lastName 被改变了')
        console.log(val)
      }
    },
    computed:{
      fullName: {
        // getter
        get() {
          console.log('getter被调用了')
          return this.firstName + ' ' + this.lastName
        },
        set: function (newValue) {
          console.log('setter被调用了')
          console.log(newValue)
          var names = newValue.split(' ')
          this.firstName = names[0]
          console.log(this.firstName)
          this.lastName = names[names.length - 1]
          console.log(this.lastName)

        }
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
