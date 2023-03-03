<script>
import MyButton from './components/MyButton.vue'
import {shallowReactive} from 'vue'
export default{
  data() {
      //this.$data.xxx="xxx"动态添加响应数据
      // 建议将那些暂时没有使用到的属性，也添加到data返回的对象中
      //data返回的对象最终会被vue代理
      // return {
      //   msg:"今天天气真不错",
      //   // vue在构建响应式对象时，会同时将对象中的属性也做成响应式属性
      //   // 深层响应式对象
      //   // stu:{
      //   //   name:"zhuyan",
      //   //   age:18,
      //   //   gender:"man"
      //   // }
      // }
      // 浅层响应式对象，对象里面的属性不能被修改
      return shallowReactive({
          stu:{
            name:"zhuyan",
            age:18,
            gender:"man"
          }
      })
  },
  components:{
    MyButton
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ stu.name }}--{{ stu.age }}--{{ stu.gender }}</h2>
  <hr/>
  <MyButton></MyButton>
  <MyButton></MyButton>
</template>