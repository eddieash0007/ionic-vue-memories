import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../views/MemoriesPage';
// import MemoryDetails from '../views/MemoryDetails';



const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component: MemoriesPage
  },   
  {
    path: '/memories/:id',
    component: () => import('@/views/MemoryDetails.vue')
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
