//在头部设置setup不用暴露不用export也不用在里面写setup
<script setup>
import { reactive } from 'vue';
const msg="vue"
const count=0
const stu=reactive({
  name:"zhuyan"
})
</script>
<template>
  <h1>组合式API</h1>
  <h2>{{ msg }}</h2>
  <h3>{{ stu.name }}</h3>
</template>