// 导入vue
import Vue from 'vue'
// 导入VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import text from './components/text.vue'

// 路由规则
const routes = [
  {
    path: '/',
    component: text 
  }
]

// 实例化路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})


// 暴露出去
export default router