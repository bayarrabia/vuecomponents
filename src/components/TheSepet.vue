<template>
  <q-dialog v-model="sepetIletisiGoster" persistent>
    <q-card>
      <q-card-section>
        <div class="q-pa-md" style="display: flex; align-items: center;">
          <div style="flex: 1;">
            <img
              src="https://www.hpstore.com.tr/hp-victus-laptop-16-r0038nt-intel-core-i7-13700h-16gb-ram-512gb-ssd-nvidia-geforce-rtx-4050-6gb-161-inc-fhd-freedos-mavi-7p6l4ea-14212-18-K.jpg"
              alt="Product Image"
              style="max-width: 100%; height: auto;"
            />
          </div>
          <div style="flex: 2; padding-left: 16px;">
            <q-btn
              class="q-pa-xs"
              round
              flat
              dense
              icon="close"
              @click="sepetIletisiGoster = false"
              style="position: absolute; top: 0; right: 0; color: #1976D2;"
            />
            <div class="text-h6" style="background-color: #1976D2; color: white; padding: 8px; width: 100%; box-sizing: border-box;">
              ÜRÜN SEPETİNİZE EKLENDİ
            </div>
            <div class="text-body1">
              HP Victus Laptop 16-S0065NT AMD Ryzen 7-7840HS 32GB RAM 1TB SSD 8GB GeForce RTX 4070 16.1 Inç FHD FreeDOS Mavi
            </div>
            <div class="text-h6">47.999,00 TL</div>
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right" style="justify-content: space-between;">
        <q-btn label="ALIŞVERİŞE DEVAM" color="primary" @click="alisveriseDevam"></q-btn>
        <q-btn label="Sepete Git" color="primary" @click="sepeteGit"></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      sepetIletisiGoster: false,
    };
  },
  methods: {
    alisveriseDevam(): void {
      this.sepetIletisiGoster = false; 
    },
    sepeteGit(): void {
      this.sepetIletisiGoster = false;
    },
    showSepetIletisi(): void {
      this.sepetIletisiGoster = true;
    },
  },
});
</script>

<style scoped>
/* Stillemeler */
</style>



