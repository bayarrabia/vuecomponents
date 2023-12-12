<template>
  <div class="filter-container">
    <!-- FİYAT -->
    <q-expansion-item icon="add" label="FİYAT" dense>
      <div class="price-inputs">
        <div class="price-input">
          <q-input outlined v-model="minPrice" type="number" placeholder="Min" dense />
        </div>
        <div class="dash">-</div>
        <div class="price-input">
          <q-input outlined v-model="maxPrice" type="number" placeholder="Max" dense />
        </div>
      </div>
    </q-expansion-item>

    <!-- Diğer filtre seçenekleri -->

    <!-- ÜRÜN YELPAZESİ -->
    <q-expansion-item icon="add" :label="'ÜRÜN YELPAZESİ (' + productRange.length + ')'" dense>
      <q-item v-for="(range, index) in productRange" :key="index">
        <q-checkbox v-model="productRangeSelection" :label="range" dense />
      </q-item>
    </q-expansion-item>

    <!-- İŞLEMCİ -->
    <q-expansion-item icon="add" label="İŞLEMCİ" dense>
      <q-item v-for="(processor, index) in processorOptions" :key="index">
        <q-checkbox v-model="processorSelection" :label="processor" dense />
      </q-item>
    </q-expansion-item>

    <!-- RAM -->
    <q-expansion-item icon="add" label="RAM" dense>
      <q-item v-for="(ram, index) in ramOptions" :key="index">
        <q-checkbox v-model="ramSelection" :label="ram" dense />
      </q-item>
    </q-expansion-item>

    <!-- SSD KAPASİTE -->
    <q-expansion-item icon="add" label="SSD KAPASİTE" dense>
      <q-item v-for="(ssd, index) in ssdOptions" :key="index">
        <q-checkbox v-model="ssdSelection" :label="ssd" dense />
      </q-item>
    </q-expansion-item>

    <!-- İŞLETİM SİSTEMİ -->
    <q-expansion-item icon="add" label="İŞLETİM SİSTEMİ" dense>
      <q-item v-for="(os, index) in osOptions" :key="index">
        <q-checkbox v-model="osSelection" :label="os" dense />
      </q-item>
    </q-expansion-item>

    <!-- DOKUNMATİK EKRAN -->
    <q-expansion-item icon="add" label="DOKUNMATİK EKRAN" dense>
      <q-item v-for="(touchScreen, index) in touchScreenOptions" :key="index">
        <q-checkbox v-model="touchScreenSelection" :label="touchScreen" dense />
      </q-item>
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const minPrice = ref<number | null>(null);
const maxPrice = ref<number | null>(null);
const productRange = ref<string[]>(['HP OMEN', 'HP EliteBook', 'HP ENVY', 'HP ProBook', 'HP Pavilion', 'HP Pavilion Gaming', 'HP Victus']);
const productRangeSelection = ref<string[]>([]);
const processorOptions = ref<string[]>(['Intel Core i3', 'Intel Core i5', 'Intel Core i7', 'Intel Core i9', 'AMD Ryzen 3', 'AMD Ryzen 5', 'AMD Ryzen 7', 'AMD Ryzen 9']);
const processorSelection = ref<string[]>([]);
const ramOptions = ref<string[]>(['4 GB', '8 GB', '16 GB', '32 GB']);
const ramSelection = ref<string[]>([]);
const ssdOptions = ref<string[]>(['256 GB', '512 GB', '1 TB', '2 TB']);
const ssdSelection = ref<string[]>([]);
const osOptions = ref<string[]>(['Windows 10 Home', 'Windows 10 Pro', 'FreeDos', 'Windows 11 Home']);
const osSelection = ref<string[]>([]);
const touchScreenOptions = ref<string[]>(['VAR', 'YOK']);
const touchScreenSelection = ref<string[]>([]);
</script>

<style scoped>
.filter-container {
  width: 200px; /* Filtre alanının genişliğini ayarlayabilirsiniz */
}

.price-inputs {
  display: flex;
  gap: 5px;
  align-items: center;
}

.price-input {
  display: flex;
  flex-direction: column;
}

.small-input {
  max-width: 40px;
}

.dash {
  font-weight: bold;
  margin: 0 5px;
}
</style>
