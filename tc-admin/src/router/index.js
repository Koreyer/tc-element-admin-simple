import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Demo1 from '../views/Demo1.vue'
import Demo2 from '../views/Demo2.vue'
import Demo3 from '../views/Demo3.vue'
import Demo4 from '../views/Demo4.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: '/demo1',
        name: 'demo1',
        component: Demo1
      }, {
        path: '/demo2',
        name: 'demo2',
        component: Demo2
      }, {
        path: '/demo3',
        name: 'demo3',
        component: Demo3
      }, {
        path: '/demo4',
        name: 'demo4',
        component: Demo4
      }]
    },
  ]
})

export default router
