import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Employees from '../views/AddEmployees.vue'
import Tests from '../views/Tests.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/employees',
    name: 'AddEmployees',
    component: Employees,
  },
  {
    path: '/tests',
    name: 'Tests',
    component: Tests,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router