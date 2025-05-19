import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/SobreView.vue'
import ContactView from '../views/ContatoView.vue'

const routes = [
  { path: '/',      name: 'Home',    component: HomeView },
  { path: '/sobre', name: 'Sobre',   component: AboutView },
  { path: '/contato', name: 'Contato', component: ContactView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
