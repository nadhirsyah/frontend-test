import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Calculator from '../components/Calculator.vue'
import UserList from '../components/UserList.vue'
import UserDetail from '../components/UserDetail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: Home
  },

  { 
    path: "/Calculator", 
    name: "Calculator", 
    component: Calculator
  },
  
  { 
    path: "/UserList", 
    name: "UserList", 
    component: UserList
  },
  { path: '/user/:id', name: 'User', component: UserDetail },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
