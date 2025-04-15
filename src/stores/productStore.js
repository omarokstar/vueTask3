import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: []
  }),
  actions: {
    async fetchProducts() {
      const res = await axios.get('http://localhost:3000/products')
      this.products = res.data
    }
  }
})