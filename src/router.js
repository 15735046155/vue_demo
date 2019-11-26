import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/pages/layout/layout.vue'
import Home1 from './views/pages/home/home1.vue'
import Home2 from './views/pages/home/home2.vue'
import About from './views/pages/about/about.vue'
// import Setting from './views/pages/setting/setting.vue'
const Setting = () => import("./views/pages/setting/setting.vue");

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children:[
        {
          path: '/home1',
          name: 'home1',
          component: Home1,
        },
        {
          path: '/home2',
          name: 'home2',
          component: Home2,
        },
        {
          path: '/about',
          name: 'about',
          component: About,
        },
        {
          path: '/setting',
          name: 'setting',
          component: Setting,
        },
      ]
    },
  ]
})
