import component from '*.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path:"",
    redirect:"/login"
  },
  {
    path:'/login',
    name:'login',
    component:()=>{return import( '../views/Login.vue')}
  },
  {
    path:'/column/:id',
    name:'column',
    component:()=>{return import('../views/ColumnDetail.vue')}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
