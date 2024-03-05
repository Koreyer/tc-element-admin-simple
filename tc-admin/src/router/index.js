import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Demo1 from '../views/Demo1.vue'
import Demo2 from '../views/Demo2.vue'
import Demo3 from '../views/Demo3.vue'
import Dashboard from '../views/Demo4.vue'
import Login from '../views/Login/Login.vue'
import Table from '@/views/Table/Table.vue'
import Table2 from '@/views/Table2/Table.vue'


const localRouter = [{
  path: '/',
  name: 'Home',
  component: Home,
  children: []
}, {
  path: '/Login',
  name: 'login',
  component: Login
}]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: localRouter
})

import routerApi from '@/api/routerApi'
const routers = routerApi.getRouter()
routers.forEach(route => {
  if (route.children != undefined) {
    route.children.forEach(x => {
      const vueRoute = {
        path: x.path,
        name: x.name,
        component: () => import(x.component  /* @vite-ignore */),
        children: []
      };
      router.addRoute('Home', vueRoute)
    })
  } else {
    const vueRoute = {
      path: route.path,
      name: route.name,
      component: () => import(route.component  /* @vite-ignore */),
      children: []
    };
    router.addRoute('Home', vueRoute)
  }

})

// function addRoutes(routes) {
//   routes.forEach(route => {
//     const vueRoute = {
//       path: route.path,
//       name: route.name,
//       component: () => import(route.component /* @vite-ignore */),
//       children: []
//     };

//     if (route.children !== undefined) { // 添加条件判断
//       addRoutes(route.children);
//     }

//     router.addRoute('Home', vueRoute); // 将路由添加到 Home 下
//   });
// }

// // 在这里调用添加路由的函数
// addRoutes(routers);

console.log('route', router.getRoutes())




export default router
