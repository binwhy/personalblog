import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  }
]

// 3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 4.导出
export default router
