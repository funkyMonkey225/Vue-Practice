import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import todolist from '@/components/todolist'
import funtimes from '@/components/funtimes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/funtimes',
      name: 'funtimes',
      component: funtimes
    },
    {
      path: '/list',
      name: 'todolist',
      component: todolist
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
