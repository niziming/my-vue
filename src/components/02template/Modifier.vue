<template>
  <div>
    <h2>修饰符</h2>
    <form v-on:submit.prevent="onSubmit"></form>
    <ol>
      <li>.stop：等同于 JavaScript 中的 event.stopPropagation()，防止事件冒泡</li>
      <li>.prevent：等同于 JavaScript 中的 event.preventDefault()，防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播）</li>
      <li>.capture：与事件冒泡的方向相反，事件捕获由外到内</li>
      <li>.self：只会触发自己范围内的事件，不包含子元素</li>
      <li>.once：只会触发一次</li>
    </ol>
    <h2>实例</h2>
    <div class="outeer" @click="outer">
      <div class="middle" @click="middle">
        <button @click="inner">点击我(^_^)</button>
      </div>
    </div>
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: "Modifier",
    data() {
      return {
        onSubmit: true,
        msg: 'msg test',
      }
    },
    methods: {
      inner() {
        this.message = 'inner： 这是最里面的Button'
      },
      middle() {
        this.message = 'middle: 这是中间的Div'
      },
      outer() {
        this.message = 'outer: 这是外面的Div'
      }
    }
  }
</script>

<style scoped>

</style>
