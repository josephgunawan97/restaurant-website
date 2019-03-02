import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Menu from '@/views/Menu.vue'
import Location from '@/views/Location.vue'
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'
import HowTo from '@/views/HowTo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    },
    {
      path: '/how-to',
      name: 'how_to',
      component: HowTo
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
  ]
})
