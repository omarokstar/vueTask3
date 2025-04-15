import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/Products.vue'
import Cart from '../views/Cart.vue'

const routes = [
  { path: '/', name: 'Products', component: Products },
  { path: '/cart', name: 'Cart', component: Cart }
]

export default createRouter({
  history: createWebHistory(),
  routes
})