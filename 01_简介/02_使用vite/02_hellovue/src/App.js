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
  template:`
  <h1>{{msg}}</h1>
  <MyButton></MyButton>
  `
}