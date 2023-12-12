<template>
  <q-page>
    <!-- Sayfa içeriği -->
    <TheSepet ref="sepetComponent"></TheSepet>

    <!-- Kullanıcı bir eylem gerçekleştirdiğinde (örneğin bir butona tıkladığında) -->
    <q-btn @click="showSepet">Sepeti Göster</q-btn>
  </q-page>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import TheSepet from 'components/TheSepet.vue';

export default defineComponent({
  methods: {
    showSepet() {
      // TheSepet.vue componentini çağır
      (this.$refs.sepetComponent as typeof TheSepet).showSepetIletisi();
    },
  },
  components: {
    TheSepet,
  },
});
</script>

  
  