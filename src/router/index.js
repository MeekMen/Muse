import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Center from '@/components/Center'
import Setinfo from '@/components/Setinfo'
import About from '@/components/About'
import Weather from '@/components/Weather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Center',
      name: 'Center',
      component: Center
    },
    {
      path: '/Setinfo',
      name: 'Setinfo',
      component: Setinfo
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Weather',
      name: 'Weather',
      component: Weather
    }
  ],
  mode:"history", //消除链接上的#号
  base:'',
})
