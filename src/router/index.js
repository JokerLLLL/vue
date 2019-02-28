import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AAA from '@/components/AAA'
import J from '@/components/jokerl'
import ZZ from '@/components/ZZ'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aaa',
      name: 'AAA',
      component: AAA
    },
    {
      path: '/jokerl',
      name: 'j',
      component: J
    },
    {
      path: '/zz',
      name: 'zz',
      component: ZZ
    }
  ]
})
