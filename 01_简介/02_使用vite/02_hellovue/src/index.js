import {createApp} from "vue/dist/vue.esm-bundler.js"
import App from "./App"

//创建挂载到页面
//mount返回的就是根组件的实例
const vm=createApp(App).mount("#app")
