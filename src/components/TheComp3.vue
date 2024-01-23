<template>
  <div class="komple">
    <p id="baslik">En Yeni Ürünler</p>
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
        name: 'HP Victus Laptop 16-R1033NT Intel Core i7-14700HX ',
        name2: '32GB RAM 1TB SSD 8GB NVIDIA GeForce RTX4060 ',
        name3: '16.1 inç FHD 144Hz FreeDOS Mavi 9J235EA.        ',
        price: '51.499,00',
        image:
          'https://www.hpstore.com.tr/hp-victus-laptop-16-r1033nt-intel-core-i7-14700hx-32gb-ram-1tb-ssd-nvidia-geforce-rtx4060-161-inc-fhd-144hz-freedos-mavi-9j235ea-14640-18-K.jpg',
      },
      {
        id: 2,
        name: 'HP OMEN Laptop 16-WF1013NT Intel Core i9-14900HX  ',
        name2: '32GB RAM 2TB SSD 8GB NVIDIA GeForce RTX4070',
        name3: '16.1 inç QHD 240Hz FreeDOS Siyah 9J1L7EA ',
        price: '88.499,00',
        image:
          'https://www.hpstore.com.tr/hp-omen-laptop-16-wf1013nt-intel-core-i9-14900hx-32gb-ram-2tb-ssd-161-inc-qhd-nvidia-geforce-rtx4070-freedos-9j1l7ea-14714-18-K.jpg',
      },
      {
        id: 3,
        name: 'HP Victus Laptop 16-R1050NT Intel Core  ',
        name2: 'i7-14700HX 16GB RAM 1TB SSD 6GB NVIDIA GeForce RTX4050',
        name3: '16.1 inç FHD 144Hz FreeDOS Mika Gümüşü 9J252EA',
        price: '46.999,90',
        image:
          'https://www.hpstore.com.tr/hp-victus-laptop-16-r1050nt-intel-core-i7-14700hx-16gb-ram-1tb-ssd-nvidia-geforce-rtx4050-161-inc-fhd-144hz-freedos-mika-gumusu-9j252ea-14647-18-K.jpg',
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
  margin-top: -450px;
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
