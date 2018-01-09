import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import todolist from '@/components/todolist'

Vue.use(Router)

export default new Router({
  routes: [
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
