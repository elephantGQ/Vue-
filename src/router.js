import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import New from './views/New.vue'
import Search from './views/Search.vue'
import Server from './views/Server.vue'
import Detail from './views/Detail.vue'
import Account from './views/Account.vue'
import Recommend from './pages/home/recommend.vue'
import Phone from './pages/home/phone.vue'
import Pad from './pages/home/pad.vue'
import Notebook from './pages/home/notebook.vue'
import Index from './pages/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Index,
      children:[
        {
            path: '/home',
            name: 'home',
            component: Home,
            redirect: '/home/recommend',
            children:[
              {
                  path: 'phone',
                  name: 'phone',
                  component: Phone
                }, 
              {
                  path: 'recommend',
                  name: 'recommend',
                  component: Recommend
                }, 
              {
                  path: 'pad',
                  name: 'pad',
                  component: Pad
                }, 
              {
                  path: 'notebook',
                  name: 'notebook',
                  component: Notebook
                }, 
            ]
          },
          {
            path: '/new',
            name: 'new',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/New.vue')
          },
          {
              path: '/server',
              name: 'server',
              component: Server
            },
            
            {
              path: '/account',
              name: 'account',
              component: Account
            },
      ]
    },
    {
        path: '/search',
        name: 'search',
        component: Search
      },
    {
        path: '/detail/:pid',
        name: 'detail',
        component: Detail
      },
  ]
})
