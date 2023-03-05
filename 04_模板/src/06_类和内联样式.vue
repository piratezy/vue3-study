<script setup>
  const arr=["box1","box2","box3"]
  const arr2=[{box1:true},{box2:false},{box3:false}]
  const style={
    color:"red", 
    backgroundColor:"bfa"
}
</script>

<template>
  <h1 class="header">vue</h1>
  <!-- 这样给这个div设置了3个属性 -->
  <div :class="arr">我是 arr</div>
  <div :class="arr2" :style="style">我是arr2</div>
</template>


<style>
.header{
  background-color: orange;
}
</style>