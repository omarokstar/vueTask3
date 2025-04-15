<template>
  <div class="row justify-content-center">
    <div class="card m-2" style="width: 18rem;" v-for="product in products" :key="product.id">
      <img :src="product.image" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <p :class="getStockClass(product.instock)">Stock: {{ product.instock }}</p>
        <button class="btn btn-primary" :disabled="product.instock == 0" @click="cart.addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCartStore } from '../stores/cartStore'
import { useProductStore } from '../stores/productStore'

const cart = useCartStore()
const productStore = useProductStore()
const products = productStore.products

onMounted(() => {
  productStore.fetchProducts()
})

function getStockClass(stock) {
  return stock === 0 ? 'text-danger' : stock < 5 ? 'text-warning' : 'text-success'
}
</script>