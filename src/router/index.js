import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("../components/TutorialList")
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("../components/Tutorial")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/AddTutorial")
  }
]

const router = new VueRouter({
  routes
})

export default router
