<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product">
      <p class="name">{{ product.name }}</p>
      <p class="description">{{ product.description }}</p>
      <div class="image-container">
        <img :src="product.image" />
        <div class="button-container">
          <button class="buton">{{ product.buttonLabel }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Product } from '../components/product2';

export default defineComponent({
  name: 'ProductList',
  setup() {
    const products = ref<Product[]>([
      {
        id: 1,
        name: 'Yazıcılar',
        description:
          'Seçili Envy, Smart Tank ve LaserJet Yazıcılarda büyük indirimlerin keyfini çıkarın',
        image:
          'https://www.hpstore.com.tr/Data/EditorFiles/rdm/v5/home/05-yazicilar.jpg',
        buttonLabel: 'Satın Al',
      },
      {
        id: 2,
        name: 'Aksesuarlar',
        description: 'HP Aksesuarlarındaki büyük indirimleri kaçırmayın',
        image:
          'https://www.hpstore.com.tr/Data/EditorFiles/rdm/v5/home/06-aksesuarlar.jpg',
        buttonLabel: 'Satın Al',
      },
      {
        id: 3,
        name: 'Kampanyalar',
        description: 'HP Ürünlerindeki tüm kampanyaları hemen keşfedin',
        image:
          'https://www.hpstore.com.tr/Data/EditorFiles/rdm/v5/home/07-kampanyalar.jpg',
        buttonLabel: 'Hemen Keşfet',
      },
      {
        id: 4,
        name: 'Yeni Ürünler',
        description: 'Şık Masaüstü Bilgisayarı serimizi hemen inceleyin',
        image:
          'https://www.hpstore.com.tr/Data/EditorFiles/rdm/v5/home/08-yeni-urunler.jpg',
        buttonLabel: 'Hemen Keşfet',
      },
    ]);

    return {
      products,
    };
  },
});
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 68px;
  margin-right: 88px;
}
.product {
  text-align: center;
  width: 48%;
  margin-bottom: 10px;
  background-color: #f4f4f4;
  border: 1px solid #2c3038;
}
.name {
  font-size: 1.5em;
  font-weight: bold;
  color: #2c3038;
  margin: 0;
  padding-bottom: 10px;
  padding-top: 5px;
  border: 0;
  text-align: left;
}
.description {
  text-align: left;
}
.image-container {
  position: relative;
}
.button-container {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
}
.buton {
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  width: 300px;
  padding: 8px 16px;
}
</style>
