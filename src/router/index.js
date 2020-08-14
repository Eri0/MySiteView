import Vue from 'vue'
import Router from 'vue-router'
import AnimeHomePage from '@/components/AnimeHomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AnimeHomePage',
      component: AnimeHomePage
    }
  ]
})
