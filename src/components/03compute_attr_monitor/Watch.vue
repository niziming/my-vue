<template>
  <div>
    <h1>监听器</h1>
    虽然计算属性在大多数情况下更合适，
    但有时也需要一个自定义的侦听器。
    这就是为什么 Vue 通过 watch
    选项提供了一个更通用的方法，来响应数据的变化。
    当需要在数据变化时执行异步或开销较大的操作时，
    这个方式是最有用的。
    <p>
      Ask a yes/no question:
      <input v-model="question">
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script>
  export default {
    name: "Watch",
    data() {
      return {
        question: 'question',
        answer: 'I cannot give you an answer until you ask a question!'
      }
    },
    watch: {
      // 如果 `question` 发生改变，这个函数就会运行
      question(newValue, oldValue) {
        console.log('新值')
        console.log(newValue)
        console.log('旧值')
        console.log(oldValue)
      }
    },
    /**
     * `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
     * 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
     * AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
     * `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
     * 请参考：https://lodash.com/docs#debounce
     */
    created: function () {
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
      getAnswer: function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            console.log(response.data.answer)
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            console.log(error)
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      }
    }
  }
</script>

<style scoped>

</style>
