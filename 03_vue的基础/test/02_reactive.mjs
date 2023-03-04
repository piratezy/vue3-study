
import {reactive,ref} from 'vue'
const stu= reactive({
  name:"zhuyan",
})
const count=ref(0)//生成一个0的响应式代理
//count =10;//改变量只会影响到自己，在js中，无法实现对一个变量的代理
const person=ref({name:"zhuyan",age:18})//{value:}