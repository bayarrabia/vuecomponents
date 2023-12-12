// ProductComparePage.vue
<template>
  <q-page class="row items-center justify-evenly">
    <ProductCompareComponent :products="products" :meta="meta" />
  </q-page>
</template>

<script setup lang="ts">
import { Meta } from 'components/models';
import ProductCompareComponent from 'src/components/ProductCompareComponent.vue';
import { ref } from 'vue';

export interface Product {
  id: string;
  title: string;
  caption?: string;
  icon?: string;
  photoUrl?: string;
  price?: string;
  props: {
    title: string;
    value: string;
  }[];
}

const products = ref<Product[]>([
  {
    id: '1',
    title: 'HP',
    caption: 'HP Pavilion 300 Oyuncu Mouse',
    icon: 'info',
    photoUrl:
      'https://www.hpstore.com.tr/hp-pavilion-300-kablolu-oyuncu-mouse-siyah-4ph30aa-1638-38-K.jpg',
    price: '528,71 TL',
    props: [
      {
        title: 'Model',
        value: 'HP Laser Mouse',
      },
      {
        title: 'Color',
        value: 'Black',
      },
      {
        title: 'Connectivity',
        value: 'Wireless',
      },
      {
        title: 'DPI',
        value: '1600',
      },
      {
        title: 'Buttons',
        value: '5',
      },
      {
        title: 'Battery Life',
        value: '12 months',
      },
    ],
  },
  {
    id: '2',
    title: 'HP',
    caption: 'HP Pavilion 200 Oyuncu Mouse',
    icon: 'info',
    photoUrl:
      'https://www.hpstore.com.tr/hp-pavilion-200-kablolu-oyuncu-mouse-siyah-5js07aa-1586-37-K.jpg',
    price: '477,86 TL',
    props: [
      {
        title: 'Model',
        value: 'HP Wireless Laser Mouse',
      },
      {
        title: 'Color',
        value: 'Black',
      },
      {
        title: 'Connectivity',
        value: 'Wireless',
      },
      {
        title: 'DPI',
        value: '1600',
      },
      {
        title: 'Buttons',
        value: '5',
      },
      {
        title: 'Battery Life',
        value: 'Up to 2 years',
      },
    ],
  },
  // Add more slides as needed
]);

const meta = ref<Meta>({
  totalCount: 1200,
});
</script>