<script>
export default{
  // data用来指定实例对象中的响应式属性
  data() {
      return{
          stu:{
            name:"zhuyan",
            age:18,
            gender:"man"
          },
      }
  },
  // methods会每次在组件渲染的时候重新调用
  methods:{
    updateAge(){
      if(this.stu.age===18){
        this.stu.age=17
      }else{
        this.stu.age=18
      }
    },
    getInfo(){
      return this.stu.age>=18?"你是成年人了!!!":"你是未成年人!!!"
    }
  },
  /* 
    这个计算属性可以将逻辑写在里面，让代码干净
    computed用来指定计算属性
    {
      属性名：getter
    }
    -计算属性，只在其依赖的数据发生变化时才会重新执行
    会对数据进行缓存
  */
  computed:{
    info(){
      // 在计算属性的getter中，尽量只做读取相关的数据
      // 不要执行那些会产生副作用的代码
      return this.stu.age>=18?"你是成年人了":"你是未成年人"
      // 计算属性的简写(只有getter时)
      // set在计算属性被修改时调用
      // set(value){}
      // 可以为计算属性设置setter，使得计算属性可写，但是不建议这么做
    }
  }
}
</script>

<template>
  <h1>{{ stu.name }}--{{ stu.age }}--{{ stu.gender }}</h1>
  <h2>评语：{{ info }}</h2>
  <!-- methods需要括号，computed不需要括号 -->
  <h2>methods:{{ getInfo() }}</h2>
  <button @click="updateAge">减少</button>
  <hr/>

</template>