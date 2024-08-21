import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign-up',
      name: 'signUp',
      component: SignUp
    },
  ]
})

export default router
