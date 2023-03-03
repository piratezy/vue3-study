<script>

//组件，一个组件可以创建多个组件实例
//组件就是一个普通的js对象
  export default{
    //data是一个函数
    //在data中，this就是当前的组件实例vm
    //如果使用箭头函数，则无法通过this来访问组件实例
    data(){
      //直接向组件实例中添加的属性不会被vue所代理，不是响应数据，修改页面不会变化
      // vm.$data是实际的代理对象
      //vm.$data.msg等价于vm.msg
      //可以通过vm.$data动态的向组件中添加响应式数据
      this.name="哈哈哈"
      
      //data会返回一个对象作为返回值，vue会对该对象进行代理
      //从而将其转换为响应式数据，响应式数据可以直接通过组件实例访问
      return{
        msg:"vue"
      }
    },
    created(){
      //会在组件创建完毕后调用
      //可以通过vm.$data动态的向组件中添加响应式数据，但是不建议这么做
      this.$data.name-"孙悟空"
    }
  }
</script>

<template>
  <h1>{{ msg }}</h1>
</template>