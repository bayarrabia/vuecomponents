<template>
  <div class="q-pa-md">
    <q-carousel
      style="object-fit: fill"
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide
        :name="1"
        img-src="https://www.hpstore.com.tr/Data/EditorFiles/rdm/homepage/slider/2024/01/hp-store-somestir-firsati-basladi.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://hpstore.com.tr/Data/EditorFiles/rdm/homepage/slider/2024/01/hp-store-14-nesil-intel-core-islemciler.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://www.hpstore.com.tr/Data/EditorFiles/rdm/homepage/slider/2023/09/15/hp-store-maximum-vade-farksiz-3-taksit-firsati.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://www.hpstore.com.tr/Data/EditorFiles/rdm/homepage/slider/2023/10/hp-store-oyun-tutkunlarinin-secimi.jpg"
      />
      <q-carousel-slide
        :name="5"
        img-src="https://www.hpstore.com.tr/Data/EditorFiles/rdm/homepage/slider/20220902/yeni-hp-laserjet-tank-tasarruflu.jpg?v=1"
      />
      <q-carousel-slide
        :name="6"
        img-src="https://www.hpstore.com.tr/Data/EditorFiles/rdm/homepage/slider/20220531/hp-baski-dunyasi.jpg"
      />
      <q-carousel-slide
        :name="7"
        img-src="https://www.hpstore.com.tr/Data/EditorFiles/rdm/homepage/slider/20220531/hp-smart-tank-kartussuz-murekkep-tankli-yazici.jpg"
      />
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
