import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Singleton from '../views/patterns/Singleton.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/singleton', name: 'singleton', component: Singleton },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
