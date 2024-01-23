<template>
  <q-page>
   
    <ThePage2></ThePage2>
    <ThePage1 style="margin-top: -750px"></ThePage1>
    <br />
    <br />
    <ThePage3></ThePage3>
    <br />
    <br />
    <ThePage12></ThePage12>
    <br />
    <ProductList></ProductList>
    <br />
    <ThePage4></ThePage4>
    <br />
    <ProductList2></ProductList2>
    <br />
    <div style="display: flex">
      <div style="background-color: white; width: 750px"></div>
      <div style="background-color: white; width: 750px"></div>
      <TheNewsFormPage></TheNewsFormPage>
    </div>
    <br />
    <br />
    <ThePage13></ThePage13>
    <br /><br />
    <div>
      <div style="background-color: white; width: 100%; height: 900px"></div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import ThePage2 from 'src/pages/ThePage2.vue';
import ThePage1 from 'src/pages/ThePage1.vue';
import ThePage3 from 'src/pages/ThePage3.vue';
import ProductList from 'src/pages/ProductList.vue';
import ThePage4 from 'src/pages/ThePage4.vue';
import TheNewsFormPage from 'src/pages/TheNewsFormPage.vue';
import ProductList2 from 'src/pages/ProductList2.vue';
import ThePage13 from 'src/pages/ThePage13.vue';
import ThePage12 from 'src/pages/ThePage12.vue';
</script>
