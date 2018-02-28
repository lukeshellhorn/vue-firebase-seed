import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Contact from '../components/Contact'
import Thing from '../components/Thing'
import Things from '../components/Things'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/things',
      name: 'things',
      component: Things,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/thing/new',
      name: 'newThing',
      component: Thing,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/thing/:id',
      name: 'thing',
      component: Thing,
      meta: {
        requiresAuth: false
      }
    }
  ]
})