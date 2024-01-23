<template>
  <div class="product-list-container">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCard from 'components/ProductCard2.vue';

export default defineComponent({
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'İş İçin',
          category: 'Gaming Laptop',
          description:
            'Verimlilik ve güvenlik için kurumsal iş bilgisayarlarına geçin.',
          image:
            'https://www.hpstore.com.tr/hp-victus-laptop-16-s0066nt-amd-ryzen-5-7640hs-16gb-ram-512gb-ssd-6gb-geforce-rtx-4050-161-inc-fhd-freedos-mika-gumusu-8v8a0ea-14355-18-K.jpg',
        },
        {
          id: 2,
          name: 'Öğrenciler İçin',
          category: 'All-in-One PC',
          description: 'Öğrenciler için en uygun Dizüstü bilgisayarlar burada!',
          image:
            'https://productimages.hepsiburada.net/s/125/550/110000075295322.jpg/format:webp',
        },
        {
          id: 3,
          name: 'Oyuncular İçin',
          category: 'Monitor',
          description:
            'En iyi oyun deneyimi için güçlü Oyun Bilgisayarları!',
          image:
            'https://www.hpstore.com.tr/hp-p34hc-g4-34-inc-5ms-hdmi-display-usb-c-4xusb-a-wqhd-curved-led-usb-c-monitor-siyah-21y56as-4956-14-K.jpg',
        },
        {
          id: 4,
          name: 'Tasarımcılar İçin',
          category: 'Business Laptop',
          description:
            'Yaratıcılığınızı yansıtacak HP Monitörlerle tasarımlarınıza hayat verin!',
          image:
            'https://www.hpstore.com.tr/hp-elitebook-640-laptop-intel-core-i7-1255u-16gb-ram-512gb-ssd-intel-iris-xe-graphics-14-inc-fhd-windows-10-pro-gumus-5y4e3ea-12996-16-K.jpg',
        },
      ],
    };
  },
});
</script>

<style scoped>
.product-list-container {
  display: flex;
  justify-content: space-around;
  margin-left: 80px;
  margin-right: 80px;
 
}
</style>
