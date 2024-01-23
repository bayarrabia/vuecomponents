<template>
  <div class="komple">
    <p id="baslik">Öne Çıkan Ürünler</p>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product">
        <img :src="product.image" />
        <p class="name">{{ product.name }}</p>
        <p class="name2">{{ product.name2 }}</p>
        <p class="name3">{{ product.name3 }}</p>
        <p class="price">{{ product.price }} TL</p>
        <button class="buton">Ürünü İncele</button>
      </div>
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
        name: 'HP OMEN 27qs 27 inç 240Hz 1ms (HDMI + Display) ',
        name2: 'G-SYNC QHD IPS Gaming Monitör 780J4E9',
        name3: '                 .                    ',
        price: '14.199,00',
        image:
          'https://www.hpstore.com.tr/hp-omen-27qs-27-inc-240hz-1ms-hdmi-display-g-sync-qhd-ips-gaming-monitor-780j4e9-14606-18-K.jpg',
      },
      {
        id: 2,
        name: 'HP Scanjet Pro 2600 F1 Flatbed ADF Tarayıcı Beyaz 20G05A',
        name2: '              .                  ',
        name3: '              .                  ',
        price: '10.899,00',
        image:
          'https://www.hpstore.com.tr/hp-scanjet-pro-2600-f1-flatbed-adf-tarayici-beyaz-20g05a-14671-18-K.jpg',
      },
      {
        id: 3,
        name: 'HP Scanjet Pro 2600 F1 Flatbed ADF Tarayıcı Beyaz 20G05A',
        name2: '              .                  ',
        name3: '              .                  ',
        price: '10.899,00',
        image:
          'https://www.hpstore.com.tr/hp-scanjet-pro-2600-f1-flatbed-adf-tarayici-beyaz-20g05a-14671-18-K.jpg',
      },
    ]);

    return {
      products,
    };
  },
});
</script>

<style scoped>
.komple {
  margin-top: -350px;
}

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

.name,
.name2,
.name3 {
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
