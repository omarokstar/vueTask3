<template>
  <div v-if="cart.items.length === 0" class="text-center text-danger">
    Cart is empty. Add some products!
  </div>
  <table v-else class="table table-bordered text-center">
    <thead>
      <tr>
        <th>Product</th><th>Price</th><th>Quantity</th><th>Total</th><th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in cart.items" :key="item.product.id">
        <td>{{ item.product.name }}</td>
        <td>{{ format(item.product.price) }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ format(item.quantity * item.product.price) }}</td>
        <td>
          <button class="btn btn-sm btn-primary" @click="cart.increase(item)">+</button>
          <button class="btn btn-sm btn-danger" @click="cart.decrease(item)">-</button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr><th colspan="3">Total</th><td colspan="2">{{ format(cart.total) }}</td></tr>
      <tr><th colspan="3">Tax (10%)</th><td colspan="2">{{ format(cart.total * 0.1) }}</td></tr>
      <tr><th colspan="3">Grand Total</th><td colspan="2">{{ format(cart.totalWithTax) }}</td></tr>
    </tfoot>
  </table>
</template>

<script setup>
import { useCartStore } from '../stores/cartStore'
const cart = useCartStore()
const format = val => new Intl.NumberFormat("ar-SA", { style: 'currency', currency: 'SAR' }).format(val)
</script>