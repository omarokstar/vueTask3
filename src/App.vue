<template>
  <div class="container mt-3">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
      <div class="container-fluid">
        <router-link class="navbar-brand text-light" to="/"
          >Products</router-link
        >
        <router-link class="nav-link text-light" to="/cart"
          >Cart ({{ cart.items.length }})</router-link
        >
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { useCartStore } from "./stores/cartStore";
const cart = useCartStore();
</script>
