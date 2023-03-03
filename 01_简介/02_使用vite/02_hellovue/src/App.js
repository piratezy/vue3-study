import MyButton from "./components/MyButton"
// 创建一个根组件
export default {
  data(){
    return {
      msg:"vue",
      count:0
    }
  },
  components:{
    MyButton
  },
  // template是用字符串的形式编写模板
  //      1.这些字符串在项目运行时，在浏览器中被编译成js的函数
  //      2.在字符串中编写代码，体验很差
  // 为了解决这个问题，Vue为我们提供了一种单文件组件
  //      vue文件用来编写单文件组件，并不能被浏览器识别
  //      同时，vue文件在打包时，构建工具会直接将template转换成函数
  template:`
  <h1>{{msg}}</h1>
  <MyButton></MyButton>
  `
}