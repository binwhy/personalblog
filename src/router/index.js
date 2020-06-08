import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const About = () => import('../views/about/About')
const Photo = () => import('../views/photo/Photo')
const MessageBoard = () => import('../views/meessageBoard/MessageBoard')
const HomeArticleDetail = () => import('../views/home/childComps/HomeArticleDetail')

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
    component: Home,
    children: [
      {
        path: 'article',
        component:HomeArticleDetail
      }
    ]
  },
  {
    path: '/photo',
    component: Photo
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/messageBoard',
    component: MessageBoard
  },
  {
    path: '/article',
    component:HomeArticleDetail
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
