import { createApp } from 'vue'
import App from './App.vue'
/*
  App.vue是根组件
        createApp(App)将根组件关联到应用上
            返回一个应用的实例
        app.mount('#app')将应用挂载到页面上
            会返回一个根组件的实例，组件的实例通常可以命名为vm
            组件实例是一个proxy对象(代理对象)
*/


createApp(App).mount('#app')
