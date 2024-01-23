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
import ProductCard from 'components/ProductCard.vue';

export default defineComponent({
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Dizüstü Bilgisayarlar',
          category: 'Gaming Laptop',
          description:
            'Yüksek performanslı ve zarif Dizüstü Bilgisayarları serimizi hemen inceleyin',
          image:
            'https://www.hpstore.com.tr/hp-victus-laptop-16-s0066nt-amd-ryzen-5-7640hs-16gb-ram-512gb-ssd-6gb-geforce-rtx-4050-161-inc-fhd-freedos-mika-gumusu-8v8a0ea-14355-18-K.jpg',
        },
        {
          id: 2,
          name: 'Masaüstü Bilgisayarlar',
          category: 'All-in-One PC',
          description: 'Şık Masaüstü Bilgisayarı serimizi hemen inceleyin',
          image:
            'https://productimages.hepsiburada.net/s/125/550/110000075295322.jpg/format:webp',
        },
        {
          id: 3,
          name: 'Monitörler',
          category: 'Monitor',
          description:
            'İster oyun oynayın, ister içerik oluşturun, size uygun her Monitör var',
          image:
            'https://www.hpstore.com.tr/hp-p34hc-g4-34-inc-5ms-hdmi-display-usb-c-4xusb-a-wqhd-curved-led-usb-c-monitor-siyah-21y56as-4956-14-K.jpg',
        },
        {
          id: 4,
          name: 'İş Bilgisayarları',
          category: 'Business Laptop',
          description:
            'Gelişmiş güvenlik ve gizlilik özellikleriyle güzelce hazırlanmış iş bilgisayarları',
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
