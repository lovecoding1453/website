import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HappyMe from '../views/HappyMe.vue'
import WhoAmI from '../views/WhoAmI.vue'
import NotFound from '../views/NotFound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/happy-me',
      name: 'happy-me',
      component: HappyMe
    },
    {
      path: '/who-am-i',
      name: 'who-am-i',
      component: WhoAmI
    },
    {
      path: '/:notFound',
      component: NotFound
    }
  ]
})

export default router
