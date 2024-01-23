<template>
  <div class="komple">
    <p id="baslik">EN ÇOK SATANLAR</p>
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
        name: 'HP OMEN Laptop 17-CM2005NT i7-13700HX  ',
        name2: '16GB RAM 1TB SSD 8GB GeForce RTX 4060',
        name3: '17.3 inç QHD FreeDOS Siyah 7P6D8EA',
        price: '5.999,00',
        image:
          'https://www.hpstore.com.tr/hp-omen-laptop-17-cm2005nt-i7-13700hx-16gb-ram-1tb-ssd-8gb-geforce-rtx-4060-173-inc-qhd-freedos-siyah-7p6d8ea-14430-17-K.jpg',
      
      },
      {
        id: 2,
        name: 'HP Victus Laptop 16 - S0021NT - AMD Ryzen 7 - 7840HS  ',
        name2: '16GB RAM 512GB SSD NVIDIA GeForce RTX 4050 6GB 16.1',
        name3: 'inç FHD 144Hz FreeDOS Mika Gümüş 7Z4N0EA',
        price: '36.699,00',
        image:
          'https://www.hpstore.com.tr/hp-victus-laptop-16-s00…nc-fhd-144hz-freedos-gumus-7z4n0ea-13616-17-K.jpg',
      },
      {
        id: 3,
        name: 'HP Victus Laptop 16 - S0021NT - AMD Ryzen 7 - 7840HS  ',
        name2: '16GB RAM 512GB SSD NVIDIA GeForce RTX 4050 6GB 16.1',
        name3: 'inç FHD 144Hz FreeDOS Mika Gümüş 7Z4N0EA',
        price: '36.699,00',
        image:
          'https://www.hpstore.com.tr/hp-victus-laptop-16-s00…nc-fhd-144hz-freedos-gumus-7z4n0ea-13616-17-K.jpg',
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