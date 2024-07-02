import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoundationView from '../views/FoundationView.vue'
import PetsView from '../views/PetsView.vue'
import ReportPetView from '../views/ReportPetView'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/acceso',
    name: 'Acceso',
    component: LoginView,
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/asociaciones',
    name: 'Asociaciones',
    component: FoundationView
  },
  {
    path: '/mascotas',
    name: 'Mascotas',
    component: PetsView
  },
  {
    path: '/reporte_pet',
    name: 'Reporte pet',
    component: ReportPetView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
