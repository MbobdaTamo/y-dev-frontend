import { createWebHistory, createRouter } from 'vue-router'
import LandingPage from '@/components/landingPage/LandingPage'
import Inscription from '@/components/identification/Inscription'

const routes = [
  {
    path: '/landingPage',
    name: 'landingPage',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'login',
    component: Inscription
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
