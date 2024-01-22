<template>
    <p id="baslik">EN YENİ ÜRÜNLER </p>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product">
        <img :src="product.image"/>
        <p class="name">{{ product.name }}</p>
        <p class="name2">{{ product.name2 }}</p>
        <p class="name3">{{ product.name3 }}</p> 
        <p class="price">{{ product.price }} TL</p>
        <button class="buton">Ürünü İncele</button>
      </div>
    </div> 
  </template> 
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Product } from '../components/product'; 
  
  export default defineComponent({ 
    name: 'ProductList',
    setup() {
      const products = ref<Product[]>([
        {
          id: 1,
          name: 'HP Victus Laptop 16-R1033NT Intel Core i7-14700HX  ',
          name2: '32GB RAM 1TB SSD 8GB NVIDIA GeForce RTX4060',
          name3: '16.1 inç FHD 144Hz FreeDOS Mavi 9J235EA',  
          price: '51.499,00',
          image: 'https://www.hpstore.com.tr/hp-victus-laptop-16-r1033nt-intel-core-i7-14700hx-32gb-ram-1tb-ssd-nvidia-geforce-rtx4060-161-inc-fhd-144hz-freedos-mavi-9j235ea-14642-18-K.jpg',
        },
        {
          id: 2,
          name: 'HP Victus Laptop 16 - S0021NT - AMD Ryzen 7 - 7840HS  ',
          name2: '16GB RAM 512GB SSD NVIDIA GeForce RTX 4050 6GB 16.1',
          name3: 'inç FHD 144Hz FreeDOS Mika Gümüş 7Z4N0EA', 
          price: '36.699,00',
          image: 'https://www.hpstore.com.tr/hp-omen-laptop-16-wf101…ia-geforce-rtx4070-freedos-9j1l7ea-14714-18-K.jpg',
        },
        {
          id: 3,
          name: 'Orijinal HP 305 XL Mürekkep Kartuşu Siyah 3YM62AE',
          name2: '         .        ',
          name3: '         .        ',  
          price: '859,90',
          image: 'https://www.hpstore.com.tr/hp-victus-laptop-16-r10…-144hz-freedos-mika-gumusu-9j252ea-14647-18-K.jpg',
        },
      ]);
  
      return {
        products,
      };
    },
  });
  </script>
  
  
  <style scoped>
  #baslik {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1.09px;
    color: #000000;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  
  .product-list {
    display: flex;
    justify-content: space-around;
  }
  
  .product {
    text-align: center;
  }
  
  .price {
    font-weight: bold;
    color: #2c3038;
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    line-height: 45px;
    text-transform: uppercase;
    padding-top: 40px;
    padding-bottom: 10px;
  }
  
  .name,.name2,.name3 {
    font-size: 16px;
    font-weight: bold;
    color: #2c3038;
    margin: 0;
    padding: 0;
    border: 0;
  }
  
  .buton {
    margin-top: 4px;
    border-radius: 3px;
    border: 1px solid #2c3038;
    color: #2c3038;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    line-height: 53px;
    text-transform: uppercase;
    width: 100%;
  }
  </style>
  