<script>
import {reactive} from 'vue'
  export default{
    // setup是一个钩子函数，可以通过这个函数向外部暴露组件的配置
    setup() {
      //定义变量
      //注意：在组合式api中直接声明的变量，就是一个普通的变量，不是响应式属性
      //      修改这些属性时，不会在视图中产生效果
      let msg="今天天气真不错"
      let count=0

      //可以通过reactive()来创建一个响应式的对象
      const stu=reactive({
        name:"zhuyan",
        age:18,
        gender:"man"
      })
      function changeAge(){
        //之前是this.stu.age,但是现在age是在同一个作用域下
        stu.age=44
      }
      //setup中可以通过返回值来指定哪些内容要暴露给外部
      //暴露后的内容跟，可以在模板中直接使用
      return{
        msg,
        stu,
        changeAge
      }
    }
  }
</script>
<template>
  <h1>演示组合式API</h1>
  <h2>{{ msg }}</h2>
  <button @click="changeAge">点我一下</button>
  <h2>{{stu.name}}--{{stu.age}}--{{stu.gender}}</h2>
</template>