import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Trending from '@/components/Trending'
import Discover from "@/components/Discover"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/trending',
      name: 'Trending',
      component: Trending
    },
    {
    	path: '/discover',
    	name: Discover,
    	component: Discover
    }
  ]
})
