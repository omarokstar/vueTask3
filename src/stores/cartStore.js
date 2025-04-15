import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    total() {
      return this.items.reduce((sum, i) => sum + i.quantity * i.product.price, 0)
    },
    totalWithTax() {
      return this.total * 1.1
    }
  },
  actions: {
    addToCart(product) {
      const existing = this.items.find(i => i.product.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ product, quantity: 1 })
      }
      product.instock--
    },
    increase(item) {
      if (item.product.instock > 0) {
        item.quantity++
        item.product.instock--
      }
    },
    decrease(item) {
      item.quantity--
      item.product.instock++
      if (item.quantity === 0) {
        this.items = this.items.filter(i => i.product.id !== item.product.id)
      }
    }
  }
})