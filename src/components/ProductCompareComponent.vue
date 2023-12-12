// ProductCompareComponent.vue
<template>
  <div class="row">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">&nbsp;</th>
          <th class="text-right" v-for="p of products" :key="p.id">
            <q-card v-if="p" class="my-card">
              <img :src="p.photoUrl" width="300" height="300" />
              <q-card-section>
                <div class="text-h6">
                  {{ p.title }}
                </div>
                <div class="text-subtitle2">
                  {{ p.caption }}
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-h6">
                  {{ p.price }}
                </div>
              </q-card-section>
            </q-card>
          </th>
        </tr>
      </thead>
      <tbody v-if="products !== undefined && products.length > 1">
        <tr>
          <td class="text-left">
            <p
              class="text-bold"
              v-for="(p, index) of products[0].props"
              :key="p.title + index"
            >
              {{ p.title }}
            </p>
          </td>
          <td class="text-left">
            <p v-for="(p, index) of products[0].props" :key="p.title + index">
              <span class="text-bold text-right">:</span>
              {{ p.value }}
            </p>
          </td>
          <td class="text-left">
            <p v-for="(p, index) of products[1].props" :key="p.title + index">
              {{ p.value }}
            </p>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { ref } from 'vue';
interface Product {
  id: string;
  title: string;
  caption?: string;
  description?: string;
  icon?: string;
  photoUrl?: string;
  price?: string;
  props: {
    title: string;
    value: string;
  }[];
}
export interface ProductCompareComponentProps {
  products: Product[];
}
const props = defineProps({
  products: Array as () => Product[],
});

const products = ref(props.products);
</script>

<style scoped>
.p-col {
  width: 300px;
  padding: 10px;
}
</style>