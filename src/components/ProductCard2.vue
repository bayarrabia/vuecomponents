<template>
  <q-card class="product-card" @click="redirectToProductDetails">
    <q-card-section>
      <h2 class="product-title">{{ product.name }}</h2>
      <p class="product-subtitle">{{ product.description }}</p>
    </q-card-section>
    <q-card-section class="product-image-section">
      <img :src="product.image" alt="Product Image" class="product-image">
    </q-card-section>
    <q-card-section class="buy-now-section">
      <q-btn color="black" label="Satın Al" @click.stop="buyNow" />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

interface Product {
  name: string;
  description: string;
  image: string;
}

export default defineComponent({
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },

  methods: {
    redirectToProductDetails(): void {
      console.log('Ürün detaylarına yönlendirildi.');
    },
    buyNow(): void {
      console.log('Satın alındı.');
    },
  },
});
</script>

<style scoped>
.product-card {
  max-width: 450px;
  margin: 20px;
  background-color: #f5f5f5;
  cursor: pointer;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-bottom: 5px;
}

.product-subtitle {
  font-size: 12px;
  color: black;
  margin-bottom: 5px;
}

.product-image-section {
  text-align: center;
  flex-grow: 1;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.buy-now-section {
  text-align: center;
  margin-bottom: 10px;
}
</style>
