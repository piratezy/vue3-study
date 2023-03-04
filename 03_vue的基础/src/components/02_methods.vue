<script>
export default{
  // data用来指定实例对象中的响应式属性
  data() {
      return{
          msg:"今天天气真不错"
      }
  },
  /*
      methods用来指定实例对象的方法
              它是一个对象，可以在它里边定义多个方法
              这些方法最终将会挂载到组件实例上
              可以直接通过组件实例来调用这些方法
              methods中函数的this函数会被自动绑定为组件实例
  */
  methods:{
    sum(a,b){
      return a+b
    }
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ sum(2,5) }}</h2>
</template>