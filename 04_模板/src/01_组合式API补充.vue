<script setup>
import {ref,reactive,computed} from "vue"
  const msg=ref("hello vue")
  //想要访问这个数据，要obj.value.name
  //整个对象都是响应式
  const obj=ref({
    name:"朱岩",
    age:18
  })
  //obj2不是响应式，它就是一个普通的对象，而它的属性是响应式
  //obj.name.value
  //这个对象在模板中并不会自动解包
  const obj2={
    name:ref("朱岩"),
    age:ref(18)
  }
  // 如果想自动解包，那么将name和age放到顶层
  const {name,age}=obj2
  const changeMsgHandler=()=>{
    //ref之所以能够响应式，是因为将数据放一个对象里，所以改ref对象时一定要加value
    msg.value="我变！"
  }
  // computed用来生成计算属性
  const newMsg=computed(()=>{
    return msg.value + "vue!"
  })
</script>

<template>
  <!-- ref对象在模板中会自动解包(要求ref对象必须时顶层对象) -->
  <h1>{{ msg }}</h1>
  <h1>{{ newMsg }}</h1>
  <h2>{{ obj.name }}</h2>//朱岩
  //需要手动解包，这个name不是顶层的响应式对象
  <h2>{{ obj.name.value }}</h2>//朱岩
  <button @click="changeMsgHandler">点我一下</button>
  <hr/>
  <h2>{{ obj.age+1 }}</h2>//19
  <h2>{{ obj2.age+1 }}</h2>//[object object]1
  <h2>{{ obj2.age.value+1 }}</h2>//19
  <h2>{{ name }}</h2>
</template>
