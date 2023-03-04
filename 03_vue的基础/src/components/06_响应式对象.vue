//在头部设置setup不用暴露不用export也不用在里面写setup
<script setup>
import {reactive,ref} from 'vue'
/*
    reactive()
        返回一个对象的响应式代理
        返回的是一个深层响应式
        也可以使用shallowReactive()创建一个浅层响应式对象
        缺点：
              只能返回对象的响应式代理，不能处理原始值
    ref()
        接受一个任意值，并返回它的响应式代理
*/
const stu= reactive({
  name:"zhuyan",
})
//ref在生成响应式代理时，它是将值包装为了一个对象0
//访问ref对象时，必须通过对象.value来访问其中的值
// 在模板中，ref对象会被自动解包，就不用写value
let count=$ref(0)//生成一个0的响应式代理
//count =10;//改变量只会影响到自己，在js中，无法实现对一个变量的代理

//vue给我们提供了一个语法糖，使得ref对象在script标签中也可以自动解包：$
//$是一个实验性的，需要在vite插件中做一些配置.暂时不要使用
// 在vite.config.js中的plugins[vue({})]中加入reactivityTransform:true
function fn(){
  count++
}
</script>

<template>
  <h1>组合式API</h1>
  <h2 @click="fn">{{ count }}</h2>
</template>